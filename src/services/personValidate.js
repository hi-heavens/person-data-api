const Joi = require("joi");

const personValidate = Joi.object({
  name: Joi.string().required().trim(),
  age: Joi.number().required(),
  gender: Joi.string().valid("male", "female", "other").required(),
  occupation: Joi.string().required().trim(),
  employmentStatus: Joi.string()
    .valid("employed", "unemployed", "self-employed", "student")
    .required(),
});

module.exports = personValidate;
