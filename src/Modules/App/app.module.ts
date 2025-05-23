import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from 'src/config/database.config';
import { typeOrmConfigData } from 'src/config/typeorm.config';
import * as path from 'path';
const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //envFilePath: !ENV ? '../../../.env.test' : `../../../.env.${ENV}`,
      envFilePath: path.join(
        __dirname,
        '..',
        '..',
        '..',
        `.env.${ENV ?? 'test'}`,
      ),
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfigData,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
