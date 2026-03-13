import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cors } from 'cors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Servir archivos estáticos de la carpeta uploads
  const express = require('express');
  app.use('/uploads', express.static('uploads'));

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    Credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
