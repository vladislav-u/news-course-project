import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import verifyToken from './middleware/auth.js';
import favouritesRouter from './routes/favourites.js';
import homeRouter from './routes/home.js';
import loginRouter from './routes/login.js';
import registerRouter from './routes/register.js';

dotenv.config();
const app = express();
const port = 5000;

try {
	await mongoose.connect(
		'mongodb+srv://vladislavulynets:courseProjectPassword@courseprojectdb.a7kbrwe.mongodb.net/newsDB'
	);
	console.log('Connected to MongoDB');
} catch (error) {
	console.log('Failed to connect to MongoDB', error);
}

app.set('view engine', 'ejs');
app.use(
	cors({
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
		origin: ['http://localhost:3000'],
	})
);

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');

	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);

	res.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type,append,delete,entries,foreach,get,has,keys,set,values,Authorization,X-Requested-With,content-type'
	);

	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

app.use('/', homeRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', verifyToken, favouritesRouter);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
