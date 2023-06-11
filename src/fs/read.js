import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const contents = await readFile(sourceFile, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
