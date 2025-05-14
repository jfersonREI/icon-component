import fs from "fs";
import path from "path";
import SVGSpriter from "svg-sprite";

const spriter = new SVGSpriter({
  dest: "public",
  mode: {
    symbol: {
      inline: true,
      sprite: "icons.sprite.svg",
    },
  },
});

const iconDir = path.resolve(process.cwd(), "src/icons");
fs.readdirSync(iconDir, { recursive: true }).forEach((file) => {
  if (file.endsWith(".svg")) {
    const filePath = path.join(iconDir, file);
    const id = path.basename(file, ".svg").replace(/^icon-/, "");
    spriter.add(filePath, `icon-${id}.svg`, fs.readFileSync(filePath, "utf-8"));
  }
});

spriter.compile((error, result) => {
  if (error) throw error;
  fs.writeFileSync("public/icons.sprite.svg", result.symbol.sprite.contents);
});
