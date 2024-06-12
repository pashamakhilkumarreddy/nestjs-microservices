import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  ValidationPipe,
  VersioningType,
  Logger as NestLogger
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app/app.module';
import 'reflect-metadata';

const signalsNames: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGHUP'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bufferLogs: true
  });

  const configService = app.get(ConfigService);

  const logger = new NestLogger('MAIN');

  signalsNames.forEach((signalName) => {
    process.on(signalName, (signal) => {
      logger.log(`Retrieved signal: ${signal}, application terminated`);
      process.exit(0);
    });
  });

  process.on('uncaughtException', (error: Error) => {
    logger.error({ err: error });
    process.exit(1);
  });

  process.on('unhandledRejection', (reason, promise) => {
    logger.error(`Unhandled Promise Rejection, reason: ${reason}`);
    promise.catch((err: Error) => {
      logger.error({ err });
      process.exit(1);
    });
  });

  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);

  app.enableVersioning({
    type: VersioningType.URI
  });

  app.enableCors({
    origin: '*',
    credentials: true
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest.JS Microservices API Manager')
    .setDescription('Nest.JS Microservices API Manager')
    .setVersion(process.env.npm_package_version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  if (configService.get('APP_ENV') !== 'production') {
    SwaggerModule.setup('api-docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true
      }
    });
  }

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: false,
      transform: true,
      stopAtFirstError: true
    })
  );

  const port = configService.get('PORT') || 5000;
  const host = configService.get('HOST') || '0.0.0.0';

  await app.listen(port, host);
  
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
