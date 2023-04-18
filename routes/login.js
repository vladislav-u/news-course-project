import bodyParser from 'body-parser';
import express from 'express';
import { loginUser, loginView } from '../controllers/loginController.js';
import { registerValidationSchema } from '../middleware/register-validation.js';

const loginRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

loginRouter.get('/login', loginView);
loginRouter.post('/login', loginUser);

export default loginRouter;
