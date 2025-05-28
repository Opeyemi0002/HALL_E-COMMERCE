import { NestFactory } from '@nestjs/core';
import { AppModule } from './Modules/App/app.module';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './Utils/Logger/winston.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig),
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
