import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .required()
    .valid('test', 'production', 'development')
    .default('test'),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.string().required().default(5432),
  DB_NAME: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_AUTOLOAD_ENTITIES: Joi.string().valid('true', 'false').required(),
  DB_SYNC: Joi.string().valid('true', 'false').required(),
});
