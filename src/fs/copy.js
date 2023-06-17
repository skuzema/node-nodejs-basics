import { readdir, mkdir, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourcePath = path.join(__dirname, 'files');
const destinationPath = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    const files = await readdir(sourcePath);
    await mkdir(destinationPath);
    await Promise.all(
      files.map(async (file) => {
        const sourceFilePath = path.join(sourcePath, file);
        const destinationFilePath = path.join(destinationPath, file);
        await copyFile(sourceFilePath, destinationFilePath);
      })
    );
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
