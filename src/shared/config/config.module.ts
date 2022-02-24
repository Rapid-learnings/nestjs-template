import { Global, Module } from '@nestjs/common';

import { ConfigService } from './config.service';

const providers = [ConfigService];

@Global()
@Module({
  providers,
  exports: [...providers],
})
export class ConfigModule {}
