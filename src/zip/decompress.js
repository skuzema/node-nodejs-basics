import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const compressedFile = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
  try {
    const compressedStream = fs.createReadStream(compressedFile);
    const targetStream = fs.createWriteStream(targetFile);
    const unzipStream = zlib.createUnzip();

    compressedStream.pipe(unzipStream).pipe(targetStream);

    targetStream.on('finish', () => {
      console.log('File decompressed successfully.');
    });

    targetStream.on('error', (error) => {
      console.error('Error decompressing file:', error);
    });
  } catch (err) {
    throw new Error('Operation failed');
  }
};

await decompress();
