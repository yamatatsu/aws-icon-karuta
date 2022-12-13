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
      createFile(
        _path,
        subTree
          .filter((fileName) => fileName !== ".DS_Store")
          .map((fileName) => {
            const moduleName = camelCase(fileName.replace(/\&/g, ""));
            return `export { default as ${moduleName} } from './${fileName}';`;
          })
      );
    } else {
      createFile(
        _path,
        Object.keys(subTree)
          .map((_path) => _path.match(/\/([^/]+)$/)[1])
          .map((dirName) => {
            const moduleName = Number.isNaN(Number(dirName))
              ? camelCase(dirName)
              : `_${dirName}`;

            return `export * as ${moduleName} from './${dirName}';`;
          })
      );
      createIndexFiles(subTree);
    }
  });
}

function createFile(_path, lines) {
  fs.writeFileSync(`${_path}/index.ts`, lines.join("\n"));
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
