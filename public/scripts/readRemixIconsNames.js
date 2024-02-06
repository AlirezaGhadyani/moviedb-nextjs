const fs = require("fs");
const path = require("path");

function getAllSvgFileNames(folderPath) {
  // Read the folder contents
  const files = fs.readdirSync(folderPath, { recursive: true });

  // Filter and retrieve only .svg file names
  const svgFiles = files.filter((file) => {
    const filePath = path.join(folderPath, file);
    const fileExt = path.extname(filePath);
    return fs.statSync(filePath).isFile() && fileExt.toLowerCase() === ".svg";
  });

  return svgFiles;
}

function generateTypeAliases(svgFiles, path) {
  // Create the type aliases string
  const typeAliases = svgFiles
    .map((file, index) => {
      const resolvedFileName = file.split("\\")[file.split("\\").length - 1];

      if (svgFiles.length === index + 1)
        return `  | "${resolvedFileName.slice(
          0,
          resolvedFileName.indexOf(".svg")
        )}";`;
      return `  | "${resolvedFileName.slice(
        0,
        resolvedFileName.indexOf(".svg")
      )}"`;
    })
    .join("\n");

  // Create the TypeScript file and write the type aliases
  const content = `export type IconsName =\n${typeAliases}`;
  fs.writeFileSync(`${path}/icons.ts`, content);

  console.log("Successfully generated icons.ts");
}

const folderPath = "./node_modules/remixicon/icons";
const svgFiles = getAllSvgFileNames(folderPath);
generateTypeAliases(svgFiles, "./src/types/components");
