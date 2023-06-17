import { rm } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const removeFilePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(removeFilePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
