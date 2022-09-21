import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Setup configuration for swagger
 * @param app 
 */
export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('API')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/documentation', app, document);
}
