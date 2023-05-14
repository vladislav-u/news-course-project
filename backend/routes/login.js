import bodyParser from 'body-parser';
import express from 'express';
import { loginUser } from '../controllers/loginController.js';
import { loginValidationSchema } from '../middleware/login-validation.js';
import { loginSchema } from '../schemas/login-schema.js';

const loginRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

loginRouter.post(
	'/login',
	urlencodedParser,
	loginSchema,
	loginValidationSchema,
	loginUser
);

export default loginRouter;
