export interface AppEnv {
  readonly NODE_ENV: string;
  readonly DEPLOYMENT: string;
}

export function getAppEnv(): AppEnv {
  return {
    /* eslint-disable @typescript-eslint/no-unnecessary-condition */
    NODE_ENV: process.env.NODE_ENV ?? '',
    DEPLOYMENT: process.env.DEPLOYMENT ?? ''
    /* eslint-enable @typescript-eslint/no-unnecessary-condition */
  };
}
