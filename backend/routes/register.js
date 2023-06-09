import bodyParser from 'body-parser';
import express from 'express';
import { registerUser } from '../controllers/registerController.js';
import { registerValidationSchema } from '../middleware/register-validation.js';
import { registerSchema } from '../schemas/register-schema.js';

const registerRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

registerRouter.post(
	'/register',
	urlencodedParser,
	registerSchema,
	registerValidationSchema,
	registerUser
);

export default registerRouter;
