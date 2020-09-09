import Joi from '@hapi/joi';

const loginSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required()
}).with('username', 'password');

export const loginValidationSchema = loginSchema;
