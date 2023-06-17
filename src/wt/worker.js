import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// if (Math.random() > 0.5) throw new Error('Error!');

const sendResult = () => {
  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
