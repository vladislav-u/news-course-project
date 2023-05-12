import { body } from 'express-validator';

const schema = [
	body('username').isLength({ min: 4, max: 20 }).isAlphanumeric('en-US'),
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

export { schema as registerSchema };
