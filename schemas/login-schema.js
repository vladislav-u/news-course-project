import { body } from 'express-validator';

const schema = [
	body('email').isEmail().normalizeEmail(),
	body('password')
		.isString()
		.isLength({ min: 8, max: 30 })
		.not()
		.isLowercase()
		.not()
		.isUppercase()
		.not()
		.isNumeric()
		.not()
		.isAlpha(),
];

export { schema as loginSchema };
