import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const compressedFile = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  try {
    const readStream = fs.createReadStream(sourceFile);
    const writeStream = fs.createWriteStream(compressedFile);
    const gzipStream = zlib.createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    writeStream.on('finish', () => {
      console.log('File compressed successfully.');
    });

    writeStream.on('error', (error) => {
      console.error('Error compressing file:', error);
    });
  } catch (err) {
    throw new Error('Operation failed');
  }
};

await compress();
