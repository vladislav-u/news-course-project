import bodyParser from 'body-parser';
import express from 'express';
import { logoutUser } from '../controllers/logoutController.js';

const logoutRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

logoutRouter.get('/logout', logoutUser);

export default logoutRouter;
