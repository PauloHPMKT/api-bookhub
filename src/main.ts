import { App } from './app';
import { EnvConfigService } from './infra/shared/env-config/env-config.service';

const envConfigService = new EnvConfigService('production');
const port = envConfigService.getAppPort();

const app = new App();

app.listen(port);
