import express from 'express';
import { homeSearch, homeView } from '../controllers/homeController.js';

const homeRouter = express.Router();

homeRouter.get('/', homeView);
homeRouter.get('/search', homeSearch);

export default homeRouter;
