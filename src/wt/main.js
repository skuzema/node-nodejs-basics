import { Worker } from 'node:worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerFile = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workers = Array.from({ length: numCores }, (_, i) => {
    return new Promise((resolve) => {
      const initialValue = 10 + i;
      const worker = new Worker(workerFile, { workerData: initialValue });
      worker.on('message', (result) =>
        resolve({ status: 'resolved', data: result })
      );
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });
  });
  const results = await Promise.all(workers);
  console.log(results);
};

await performCalculations();
