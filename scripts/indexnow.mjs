import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const SITE_ORIGIN = "https://www.lifefocus.fr";
const SITE_HOST = "www.lifefocus.fr";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const DIST_DIR = "dist";
const PUBLIC_DIR = "public";
const SITEMAP_INDEX = path.join(DIST_DIR, "sitemap-index.xml");
const KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;
const ASSET_EXTENSION_PATTERN =
  /\.(?:avif|css|gif|ico|jpeg|jpg|js|json|map|mp4|pdf|png|svg|txt|webmanifest|webp|woff2?|xml)$/i;

const command = process.argv[2];
const key = process.env.INDEXNOW_KEY?.trim();
const previousSha = process.env.INDEXNOW_PREVIOUS_SHA?.trim();
const currentSha = process.env.INDEXNOW_CURRENT_SHA?.trim() || "HEAD";

const log = (message) => console.log(`[IndexNow] ${message}`);
const warn = (message) => console.warn(`[IndexNow] ${message}`);

const isValidKey = (value) => KEY_PATTERN.test(value);

const ensureValidKey = () => {
  if (!key) {
    warn("INDEXNOW_KEY is missing. Skipping IndexNow setup.");
    return false;
  }

  if (!isValidKey(key)) {
    warn(
      "INDEXNOW_KEY must be 8-128 characters and contain only letters, numbers, or dashes. Skipping IndexNow setup.",
    );
    return false;
  }

  return true;
};

const extractLocs = (xml) =>
  Array.from(xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi), ([, loc]) =>
    loc.trim(),
  );

const readSitemapUrls = () => {
  if (!fs.existsSync(SITEMAP_INDEX)) {
    throw new Error(`Missing sitemap index: ${SITEMAP_INDEX}`);
  }

  const sitemapIndex = fs.readFileSync(SITEMAP_INDEX, "utf8");
  const sitemapFiles = extractLocs(sitemapIndex)
    .map((loc) => {
      const url = new URL(loc);
      if (url.origin !== SITE_ORIGIN) return null;
      return path.join(DIST_DIR, path.basename(url.pathname));
    })
    .filter(Boolean);

  const urls = new Set();

  for (const sitemapFile of sitemapFiles) {
    if (!fs.existsSync(sitemapFile)) {
      warn(`Referenced sitemap not found locally: ${sitemapFile}`);
      continue;
    }

    for (const loc of extractLocs(fs.readFileSync(sitemapFile, "utf8"))) {
      const url = new URL(loc);
      const isCanonicalPublicPage =
        url.origin === SITE_ORIGIN &&
        url.search === "" &&
        url.hash === "" &&
        !url.pathname.startsWith("/api/") &&
        !url.pathname.startsWith("/_astro/") &&
        !ASSET_EXTENSION_PATTERN.test(url.pathname);

      if (isCanonicalPublicPage) {
        urls.add(url.toString());
      }
    }
  }

  return Array.from(urls).sort();
};

const isZeroSha = (value) => /^0+$/.test(value);

const toPosixPath = (filePath) => filePath.replace(/\\/g, "/");

const getChangedFiles = () => {
  if (!previousSha || isZeroSha(previousSha)) {
    return {
      mode: "all",
      reason:
        "No previous commit is available. This can happen on the first push or the first IndexNow deployment.",
    };
  }

  try {
    try {
      execFileSync("git", ["cat-file", "-e", `${previousSha}^{commit}`], {
        stdio: "ignore",
      });
    } catch {
      return {
        mode: "all",
        reason:
          "The previous commit is not available in the checkout. Falling back to the full sitemap.",
      };
    }

    const diffOutput = execFileSync(
      "git",
      ["diff", "--name-status", previousSha, currentSha],
      { encoding: "utf8" },
    );

    const changes = diffOutput
      .trim()
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const [status, ...paths] = line.split("\t");
        const filePath = paths[paths.length - 1];
        const previousPath = paths.length > 1 ? paths[0] : filePath;

        return {
          status,
          path: toPosixPath(filePath),
          previousPath: toPosixPath(previousPath),
        };
      });

    return { mode: "changed", changes };
  } catch (error) {
    return {
      mode: "all",
      reason: `Git diff detection failed (${error instanceof Error ? error.message : String(error)}). Falling back to the full sitemap.`,
    };
  }
};

const pageFileToUrl = (filePath) => {
  const normalizedPath = toPosixPath(filePath);
  const match = normalizedPath.match(/^src\/pages\/(.+)\.(astro|md|mdx)$/);

  if (!match) return null;

  let route = match[1];

  if (
    route === "404" ||
    route.startsWith("api/") ||
    route.includes("[") ||
    route.includes("]")
  ) {
    return null;
  }

  if (route === "index") {
    route = "";
  } else if (route.endsWith("/index")) {
    route = route.slice(0, -"index".length);
  } else {
    route = `${route}/`;
  }

  return `${SITE_ORIGIN}/${route}`;
};

const shouldSubmitAllForPath = (filePath) => {
  const normalizedPath = toPosixPath(filePath);

  if (normalizedPath.startsWith("src/pages/")) {
    return false;
  }

  return (
    normalizedPath === "astro.config.mjs" ||
    normalizedPath === "package.json" ||
    normalizedPath === "package-lock.json" ||
    normalizedPath.startsWith("src/components/") ||
    normalizedPath.startsWith("src/layouts/") ||
    normalizedPath.startsWith("src/styles/") ||
    normalizedPath.startsWith("src/data/") ||
    normalizedPath.startsWith("src/content/")
  );
};

const resolveUrlsToSubmit = () => {
  const sitemapUrls = readSitemapUrls();
  const sitemapUrlSet = new Set(sitemapUrls);
  const diff = getChangedFiles();

  if (diff.mode === "all") {
    log(diff.reason);
    return { urls: sitemapUrls, source: "full sitemap fallback" };
  }

  if (diff.changes.length === 0) {
    return { urls: [], source: "git diff" };
  }

  const changedPaths = diff.changes.flatMap((change) => [
    change.path,
    change.previousPath,
  ]);

  const needsFullSitemap = changedPaths.some(shouldSubmitAllForPath);

  if (needsFullSitemap) {
    log(
      "Shared content, layout, data, style, or config changed. Submitting the full public sitemap to avoid missing affected pages.",
    );
    return { urls: sitemapUrls, source: "full sitemap fallback" };
  }

  const urls = new Set();

  for (const change of diff.changes) {
    const currentUrl = pageFileToUrl(change.path);
    const previousUrl = pageFileToUrl(change.previousPath);

    if (currentUrl && sitemapUrlSet.has(currentUrl)) {
      urls.add(currentUrl);
    }

    if ((change.status.startsWith("D") || change.status.startsWith("R")) && previousUrl) {
      urls.add(previousUrl);
    }
  }

  return { urls: Array.from(urls).sort(), source: "git diff" };
};

const prepareKeyFile = () => {
  if (!ensureValidKey()) return;

  const keyFilePath = path.join(PUBLIC_DIR, `${key}.txt`);
  fs.writeFileSync(keyFilePath, `${key}\n`, { encoding: "utf8", mode: 0o600 });
  log(`Created verification file ${keyFilePath}`);
};

const submitUrls = async () => {
  try {
    if (!ensureValidKey()) return;

    const { urls, source } = resolveUrlsToSubmit();
    log(`Prepared ${urls.length} canonical URL(s) from ${source}.`);

    if (urls.length === 0) {
      warn("No URL to submit. Skipping IndexNow notification.");
      return;
    }

    const payload = {
      host: SITE_HOST,
      key,
      keyLocation: `${SITE_ORIGIN}/${key}.txt`,
      urlList: urls,
    };

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    log(`Submitted ${urls.length} URL(s). HTTP status: ${response.status}`);

    if (!response.ok) {
      const responseText = await response.text().catch(() => "");
      warn(
        `IndexNow notification failed without blocking deployment.${responseText ? ` Response: ${responseText}` : ""}`,
      );
    }
  } catch (error) {
    warn(
      `IndexNow notification failed without blocking deployment: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};

if (command === "prepare-key") {
  prepareKeyFile();
} else if (command === "submit") {
  await submitUrls();
} else {
  console.error("Usage: node scripts/indexnow.mjs <prepare-key|submit>");
  process.exitCode = 1;
}
