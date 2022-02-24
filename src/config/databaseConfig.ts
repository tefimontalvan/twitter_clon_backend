import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
require('dotenv').config();

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: 4000,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  url: process.env.TYPEORM_URL,
  autoLoadEntities: true,
  synchronize: true,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  cli: {
    entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  },
};
