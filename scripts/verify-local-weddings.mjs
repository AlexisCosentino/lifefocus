import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const read = (path) => readFileSync(join("dist", path), "utf8");
const routes = [
  ["romans-sur-isere", "Romans-sur-Isère"],
  ["valence", "Valence"],
  ["montelimar", "Montélimar"],
  ["ardeche", "Ardèche"],
];
const sitemap = read("sitemap-0.xml");
const mariage = read("mariage/index.html");
const descriptions = new Set();
const photoData = readFileSync("src/data/localWeddingPages.ts", "utf8");
const photoFolders = {
  "romans-sur-isere": "mariage_romans",
  valence: "mariage_valence",
  montelimar: "mariage_montelimar",
  ardeche: "mariage_ardeche",
};

for (const [slug, destination] of routes) {
  const path = `photographe-mariage-${slug}`;
  const html = read(`${path}/index.html`);
  const canonical = `https://www.lifefocus.fr/${path}/`;
  assert.ok(html.includes(`<title>Photographe de mariage ${slug === "ardeche" ? "en" : "à"} ${destination} | Life Focus</title>`), `${path}: title`);
  assert.match(html, new RegExp(`<h1[^>]*>Photographe de mariage ${slug === "ardeche" ? "en" : "à"} ${destination}</h1>`), `${path}: H1`);
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${path}: canonical`);
  assert.ok(html.includes('name="description" content="'), `${path}: description`);
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const ogDescription = html.match(/<meta property="og:description" content="([^"]+)"/)?.[1];
  const twitterDescription = html.match(/<meta name="twitter:description" content="([^"]+)"/)?.[1];
  assert.ok(description, `${path}: description value`);
  assert.equal(ogDescription, description, `${path}: Open Graph description`);
  assert.equal(twitterDescription, description, `${path}: Twitter description`);
  assert.ok(!descriptions.has(description), `${path}: unique description`);
  descriptions.add(description);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: exactly one H1`);
  assert.ok(html.includes('href="/mariage/"'), `${path}: mariage link`);
  assert.ok(html.includes('href="/contact/"'), `${path}: contact link`);
  assert.ok(!html.includes('id="local-gallery-title"'), `${path}: empty gallery visible`);
  assert.ok(!html.includes('class="image-slot'), `${path}: missing image placeholder`);
  const folder = photoFolders[slug];
  const files = readdirSync(join("src/images/mariage", folder)).filter((file) => /\.(jpe?g|png|webp)$/i.test(file));
  const referenced = [...photoData.matchAll(/photo\("(mariage_[^"]+)", "([^"]+)"/g)]
    .filter((match) => match[1] === folder)
    .map((match) => match[2]);
  assert.deepEqual(referenced.toSorted(), files.toSorted(), `${path}: all local photos used exactly once`);
  assert.equal([...html.matchAll(/data-local-wedding-photo/g)].length, files.length, `${path}: rendered photo count`);
  assert.equal([...html.matchAll(new RegExp(`data-photo-lightbox-group="${path}"`, "g"))].length, files.length, `${path}: clickable photos`);
  const hero = html.match(/<section class="local-wedding__hero[^>]*>([\s\S]*?)<\/section>/)?.[1];
  assert.ok(hero?.includes('id="local-wedding-title"'), `${path}: H1 in hero`);
  assert.equal([...hero.matchAll(/data-local-wedding-photo/g)].length, 2, `${path}: two hero photos`);
  assert.ok(!html.includes('>GALERIE<'), `${path}: no gallery section`);
  assert.ok(sitemap.includes(canonical), `${path}: sitemap`);
  assert.ok(mariage.includes(`href="/${path}/"`), `${path}: link from mariage`);
  assert.ok(html.includes('aria-label="Mariages dans la région"'), `${path}: regional footer`);
  assert.ok(html.includes(`href="/${path}/"`), `${path}: footer link`);
  assert.ok(!/<summary[^>]*>[^<]*\btu\b/i.test(html), `${path}: FAQ uses vouvoiement`);
  for (const price of ["900 €", "1 500 €", "1 950 €", "2 300 €"]) {
    assert.ok(html.includes(price) && mariage.includes(price), `${path}: package ${price}`);
  }
  for (const travel of ["Déplacement jusqu'à 50 km autour de Romans-sur-Isère.", "Déplacement jusqu'à 100 km autour de Romans-sur-Isère."]) {
    const escapedTravel = travel.replaceAll("'", "&#39;");
    assert.ok(html.includes(escapedTravel) && mariage.includes(escapedTravel), `${path}: travel conditions ${travel}`);
  }
  if (slug === "ardeche") {
    assert.ok(!html.includes('id="local-resources-title"'), `${path}: no empty resources section`);
    assert.ok(!html.includes('href="/conseils/prix-photographe-mariage-drome/"'), `${path}: no Drôme price article`);
  }
  for (const href of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    if (href[1].startsWith("/_astro/")) continue;
    const target = href[1] === "/" ? "index.html" : `${href[1].slice(1)}index.html`;
    assert.ok(existsSync(join("dist", target)), `${path}: broken link ${href[1]}`);
  }
  console.log(`${path}: OK`);
}

const prestataires = read("conseils/prestataires-mariage-drome/index.html");
assert.ok(prestataires.includes('href="https://pierrickmartinet.fr/magicien-mariage-valence/"'), "Pierrick wedding link");

for (const [slug] of routes.slice(0, 2)) {
  const guide = read(`conseils/photographe-mariage-${slug}/index.html`);
  assert.ok(guide.includes(`href="/photographe-mariage-${slug}/"`), `${slug}: guide link`);
  assert.ok(guide.includes(`https://www.lifefocus.fr/conseils/photographe-mariage-${slug}/`), `${slug}: guide canonical`);
  assert.ok(guide.includes('<title>Se marier à '), `${slug}: guide title distinct from commercial page`);
}

console.log("Local wedding pages and guides: OK");
