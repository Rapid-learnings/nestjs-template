import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

/**
 * config file path for dot-env file
 * @default `development`
 */
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });


/**
 * configuration for TypeOrm connection to postgres database
 */
const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: [path.join(__dirname, 'shared/database/migrations', '*.{ts,js}')],
  cli: {
    migrationsDir: path.join(
      __dirname,
      'shared/database/migrations',
      '*.{ts,js}',
    ),
  },
  migrationsRun: true,
  synchronize: false,
};
export default ormconfig;
