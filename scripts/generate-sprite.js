import fs from "fs";
import path from "path";
import SVGSpriter from "svg-sprite";
import { JSDOM } from "jsdom";

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
const publicDir = path.resolve(process.cwd(), "public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log("Created public/ directory");
}

const collectSvgFiles = (dir) => {
  let svgs = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      svgs = svgs.concat(collectSvgFiles(fullPath));
    } else if (file.name.endsWith(".svg")) {
      svgs.push(fullPath);
    }
  }
  return svgs;
};

const svgFiles = collectSvgFiles(iconDir);
console.log("Found SVG files:", svgFiles);

if (svgFiles.length === 0) {
  console.error("No SVG files found in src/icons/");
  process.exit(1);
}

svgFiles.forEach((filePath) => {
  const relativePath = path.relative(iconDir, filePath);
  const id = path.basename(filePath, ".svg").replace(/^icon-/, "");
  console.log(`Processing: ${relativePath} -> ID: ${id}`);
  try {
    const svgContent = fs.readFileSync(filePath, "utf-8");
    console.log(
      `Raw SVG content for ${relativePath}:`,
      svgContent.slice(0, 100) + "..."
    );
    const dom = new JSDOM(svgContent, { contentType: "image/svg+xml" });
    const svg = dom.window.document.querySelector("svg");
    if (!svg) {
      console.error(`No SVG element in ${filePath}`);
      return;
    }
    const elements = svg.querySelectorAll("path,rect,circle,polygon,g");
    elements.forEach((el) => {
      el.removeAttribute("fill");
      el.setAttribute("fill", "currentColor");
    });
    const modifiedSvg = svg.outerHTML;
    console.log(
      `Modified SVG for ${relativePath}:`,
      modifiedSvg.slice(0, 100) + "..."
    );
    if (!modifiedSvg.includes("<svg")) {
      console.error(`Invalid SVG content for ${filePath}:`, modifiedSvg);
      return;
    }
    spriter.add(filePath, `icon-${id}.svg`, modifiedSvg);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
});

spriter.compile((error, result) => {
  if (error) {
    console.error("Sprite compilation error:", error);
    process.exit(1);
  }
  console.log("Compilation result:", Object.keys(result.symbol.sprite));
  if (
    !result.symbol.sprite.contents ||
    result.symbol.sprite.contents.toString().length < 100
  ) {
    console.error("Empty or near-empty sprite generated");
    process.exit(1);
  }
  try {
    let spriteContent = result.symbol.sprite.contents.toString();
    spriteContent = spriteContent
      .replace(/id="icon-/g, 'id="')
      .replace(/fill="none"/g, "")
      .replace(/<symbol\s+/g, "<symbol ");
    if (!spriteContent.includes("<symbol")) {
      console.error(
        "No symbols found in sprite after post-processing:",
        spriteContent.slice(0, 200) + "..."
      );
      process.exit(1);
    }
    try {
      const dom = new JSDOM(spriteContent, { contentType: "image/svg+xml" });
      const svg = dom.window.document.querySelector("svg");
      if (!svg || svg.querySelectorAll("symbol").length === 0) {
        console.error("Invalid sprite XML after post-processing");
        process.exit(1);
      }
    } catch (xmlError) {
      console.error("XML validation error:", xmlError);
      process.exit(1);
    }
    const outputPath = path.join(publicDir, "icons.sprite.svg");
    fs.writeFileSync(outputPath, spriteContent);
    console.log("Sprite generated:", outputPath);
    console.log("Sprite content preview:", spriteContent.slice(0, 200) + "...");
  } catch (writeError) {
    console.error("Error writing sprite:", writeError);
    process.exit(1);
  }
});
