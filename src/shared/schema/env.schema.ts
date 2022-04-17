import Joi from 'joi';

export const envSchema = Joi.object({
  PORT: Joi.number().required(),
  NODE_ENV: Joi.string().required(),
  JWT_SECRET_KEY: Joi.string().required(),
  JWT_EXPIRATION_TIME: Joi.number().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  SENTRY_DSN: Joi.string().required(),
});
