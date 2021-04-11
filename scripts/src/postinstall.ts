import { shell } from './util/util';
import { getAppEnv } from './util/app-env';

async function fn(): Promise<void> {
  await shell(`echo aaa ${JSON.stringify(getAppEnv())}`);
  //await shell('husky install');
}

fn().finally();
