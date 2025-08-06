import fs from "fs-extra";
import path from "path";

const imageDir = path.resolve(__dirname, "../src/logos");
const outputFile = path.resolve(__dirname, "../src/index.ts");

async function generateBase64Images() {
  const files = await fs.readdir(imageDir);
  const logos: Record<string, Record<string, string>> = {};

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const format = ext.replace(".", ""); // 'svg' or 'png'
    const code = path.basename(file, ext); // 'EK', 'QR', etc.
    const filePath = path.join(imageDir, file);
    const mime = ext === ".svg" ? "image/svg+xml" : "image/png";
    const base64 = fs.readFileSync(filePath).toString("base64");
    const dataString = `data:${mime};base64,${base64}`;

    if (!logos[code]) logos[code] = {};
    logos[code][format] = dataString;
  }

  const outputLines = [
    "// Auto-generated. Do not edit manually.",
    "const airLogos = " + JSON.stringify(logos, null, 2) + ";",
    "",
    "export default airLogos;",
  ];

  await fs.writeFile(outputFile, outputLines.join("\n"), "utf8");
  console.log("✅ airLogos base64 file generated!");
}

generateBase64Images();
