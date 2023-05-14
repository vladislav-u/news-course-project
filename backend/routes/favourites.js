import bodyParser from 'body-parser';
import express from 'express';

import {
	addFavourite,
	favouritesView,
} from '../controllers/favouritesController.js';
import { cardSchema } from '../schemas/card-schema.js';

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const favouritesRouter = express.Router();

favouritesRouter.get('/favourites', favouritesView);
favouritesRouter.post(
	'/favourites',
	urlencodedParser,
	cardSchema,
	addFavourite
);

export default favouritesRouter;
