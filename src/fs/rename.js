import { rename as renameFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { fileExists } from '../libs/fs/checker.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const destinationFile = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    if (await fileExists(destinationFile)) {
      throw new Error('FS operation failed');
    }
    await renameFile(sourceFile, destinationFile);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
