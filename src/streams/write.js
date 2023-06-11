import path from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  try {
    const writableStream = createWriteStream(targetFile, { flags: 'a' });
    await pipeline(process.stdin, writableStream);
  } catch (err) {
    throw new Error('Operation failed');
  }
};

await write();
