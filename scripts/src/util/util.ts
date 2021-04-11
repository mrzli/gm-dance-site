import { ChildProcess, exec } from 'child_process';

export async function shell(command: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const childProcess: ChildProcess = exec(command);
    childProcess.stdout?.on('data', (data) => {
      console.log(data);
    });
    childProcess.stderr?.on('data', (data) => {
      console.error(data);
    });
    childProcess.on('exit', () => {
      resolve();
    });
    childProcess.on('error', (error) => {
      reject(error);
    });
  });
}
