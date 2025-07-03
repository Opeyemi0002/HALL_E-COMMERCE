import { NestFactory } from '@nestjs/core';
import { AppModule } from './Modules/App/app.module';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './Utils/Logger/winston.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig),
  });

  /**
   *swagger configuration
   */
  const config = new DocumentBuilder()
    .setTitle('HALL-ECOMMERCE')
    .setDescription('use the base URL as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms-of-service')
    .setLicense('MIT License', 'github.com/license')
    .addServer('http://localhost:3000')
    .setVersion('1.0')
    .build();

  //instantiate Document
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
