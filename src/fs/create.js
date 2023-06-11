import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(filePath, fileContent, { flag: 'wx' });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await create();
