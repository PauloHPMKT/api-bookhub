import * as dotenv from 'dotenv';
import { EnvConfig } from './env-config.interface';
import { join } from 'node:path';

export class EnvConfigService implements EnvConfig {
  constructor(
    private readonly environment: string,
    private readonly envFile?: string,
  ) {
    this.envFile =
      this.environment === 'production' ? 'env' : `env.${this.environment}`;
    dotenv.config({
      path: join(__dirname, `../../../../.${this.envFile}`),
    });
  }

  private static instance: EnvConfigService;
  public static getInstance(environment: string): EnvConfigService {
    if (!this.instance) this.instance = new EnvConfigService(environment);
    return this.instance;
  }

  getAppPort(): number {
    return Number(process.env.APP_PORT);
  }
  getNodeEnv(): string {
    return process.env.NODE_ENV ?? this.environment;
  }
}
