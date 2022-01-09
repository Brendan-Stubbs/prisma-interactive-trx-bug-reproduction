import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('dotenv').config({
  path: `./.env.${process.env.STAGE}`,
}).parsed;

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: true,
  });

  const port = 3000;
  await app.listen(port);
  logger.log(`Application listening on Port ${port}`);
}
bootstrap();
