import bodyParser from 'body-parser';
import express from 'express';
import { homeSearch, homeView } from '../controllers/homeController.js';

const homeRouter = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

homeRouter.get('/', homeView);
homeRouter.get('/search', homeSearch);

export default homeRouter;
