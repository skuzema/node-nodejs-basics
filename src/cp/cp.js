import { fork, spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cpFile = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const childProcess = fork(cpFile, args, {
    stdio: ['pipe', 'pipe', 'inherit', 'ipc'],
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  childProcess.on('close', (code) => {
    process.stdin.pause();
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
