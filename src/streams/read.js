import path from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const readableStream = createReadStream(sourceFile);
    await pipeline(readableStream, process.stdout);
  } catch (err) {
    throw new Error('Operation failed');
  }
};

await read();
