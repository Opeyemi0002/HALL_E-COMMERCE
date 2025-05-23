import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfigData = (
  config: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.get('database.host'),
  port: config.get('database.port'),
  password: config.get('database.password'),
  username: config.get('database.userName'),
  autoLoadEntities: config.get('database.autoLoadEntities'),
  database: config.get('database.name'),
  synchronize: config.get('database.sync'),
});
