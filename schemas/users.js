const Joi = require("joi");
const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
    .min(3)
    .required(),
  password: Joi.string().min(3).required(),

  token: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
    .min(3)
    .required(),
  password: Joi.string().min(3).required(),

  token: Joi.string(),
});

module.exports = { registerSchema, loginSchema };
