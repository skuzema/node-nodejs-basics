import path from 'path';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const content = await readFile(sourceFile);
    const data = createHash('sha256').update(content).digest('hex');
    console.log(data);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await calculateHash();
