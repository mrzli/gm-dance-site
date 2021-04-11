import { shell } from './util/util';
import { getAppEnv } from './util/app-env';

async function fn(): Promise<void> {
  const env = getAppEnv();
  if (env.DEPLOYMENT !== 'true') {
    await shell('husky install');
  }
}

fn().finally();
