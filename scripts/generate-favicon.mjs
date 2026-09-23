import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const source = "src/assets/brand/Logo Life Focus APPAREIL PHOTO.png";

async function png(size) {
  return sharp(source)
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}

await writeFile("public/favicon.png", await png(512));
await writeFile("public/favicon-32.png", await png(32));
await writeFile("public/icon-192.png", await png(192));
await writeFile("public/apple-touch-icon.png", await png(180));

const frames = await Promise.all([16, 32, 48].map(png));
const header = Buffer.alloc(6 + frames.length * 16);

header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);

let offset = header.length;

frames.forEach((frame, index) => {
  const size = [16, 32, 48][index];
  const position = 6 + index * 16;

  header[position] = size;
  header[position + 1] = size;
  header[position + 2] = 0;
  header[position + 3] = 0;
  header.writeUInt16LE(1, position + 4);
  header.writeUInt16LE(32, position + 6);
  header.writeUInt32LE(frame.length, position + 8);
  header.writeUInt32LE(offset, position + 12);

  offset += frame.length;
});

await writeFile("public/favicon.ico", Buffer.concat([header, ...frames]));

const svgPng = (await png(192)).toString("base64");
await writeFile(
  "public/favicon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><image href="data:image/png;base64,${svgPng}" width="192" height="192"/></svg>\n`,
);
