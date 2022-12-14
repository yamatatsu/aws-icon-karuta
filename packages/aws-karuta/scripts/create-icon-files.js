import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import camelCase from "camelcase";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const iconsDir = path.resolve(__dirname, "../src/icons");

createIndexFiles(findSVG(iconsDir));

function createIndexFiles(tree) {
  return Object.entries(tree).forEach(([_path, subTree]) => {
    if (Array.isArray(subTree)) {
      const { importLines, exportLines } = subTree.reduce(
        ({ importLines, exportLines }, fileName) => {
          const id = camelCase(fileName.replace(/\&/g, ""));
          const name = getIconName(fileName);
          return {
            importLines: importLines.concat(
              `import _${id} from './${fileName}';\n`
            ),
            exportLines: exportLines.concat(
              `export const ${id} = { id: "${id}", name: "${name}", icon: _${id} };\n`
            ),
          };
        },
        { importLines: [], exportLines: [] }
      );
      fs.writeFileSync(
        `${_path}/index.ts`,
        `${importLines.join("")}\n${exportLines.join("")}`
      );
    } else {
      fs.writeFileSync(
        `${_path}/index.ts`,
        Object.keys(subTree)
          .map((_path) => _path.match(/\/([^/]+)$/)[1])
          .map((dirName) => {
            const moduleName = Number.isNaN(Number(dirName))
              ? camelCase(dirName)
              : `_${dirName}`;

            return `export * as ${moduleName} from './${dirName}';`;
          })
          .join("\n")
      );
      createIndexFiles(subTree);
    }
  });
}

function getIconName(fileName) {
  if (fileName.startsWith("Arch_")) {
    return fileName.match(/^Arch_(.*)_\d\d\.svg$/)[1].replaceAll("-", " ");
  } else if (fileName.startsWith("Arch-Category_")) {
    return fileName
      .match(/^Arch-Category_(.*)_\d\d\.svg$/)[1]
      .replaceAll("-", " ");
  } else {
    return fileName
      .match(/^Res_(.*)_\d\d_(Dark|Light)\.svg$/)[1]
      .replaceAll("_", " | ")
      .replaceAll("-", " ");
  }
}

function findSVG(dirPath) {
  const children = fs.readdirSync(dirPath);
  const [, dirName] = dirPath.match(/\/([^/]+)$/);

  if (children.every((child) => fs.lstatSync(`${dirPath}/${child}`).isFile())) {
    return children.filter((fileName) => /\.svg$/.test(fileName));
  } else {
    return children.reduce((acc, child) => {
      const childPath = `${dirPath}/${child}`;
      if (fs.lstatSync(childPath).isFile()) {
        return acc;
      }
      return { ...acc, [childPath]: findSVG(childPath) };
    }, {});
  }
}
