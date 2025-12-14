import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Root folder (change if needed)
const rootDir = __dirname;

// Output file
const outputFile = path.join(rootDir, "Index.md");

// Helper function to create Markdown links
function generateLinks(dir, relativePath = "") {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  let mdContent = "";

  items.forEach((item) => {
    const itemPath = path.join(dir, item.name);
    const itemRelPath = path.join(relativePath, item.name);

    if (item.isDirectory()) {
      // Folder as heading
      mdContent += `\n## ${item.name}\n`;
      mdContent += generateLinks(itemPath, itemRelPath);
    } else if (
      item.isFile() &&
      item.name.endsWith(".md") &&
      item.name !== "Index.md"
    ) {
      // Markdown file link
      const displayName = item.name.replace(/\.md$/, "");
      mdContent += `- [${displayName}](${itemRelPath.replace(/\\/g, "/")})\n`;
    }
  });

  return mdContent;
}

// Generate full Markdown
const markdown = `# Project Index

Welcome! Click any link below to open the corresponding topic.

${generateLinks(rootDir)}
`;

// Write to Index.md
fs.writeFileSync(outputFile, markdown);

console.log("✅ Index.md has been generated successfully!");
