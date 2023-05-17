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
import logoutRouter from './routes/logout.js';
import registerRouter from './routes/register.js';

dotenv.config();
const app = express();
const port = 3000;

try {
	await mongoose.connect(
		'mongodb+srv://vladislavulynets:courseProjectPassword@courseprojectdb.a7kbrwe.mongodb.net/newsDB'
	);
	console.log('Connected to MongoDB');
} catch (error) {
	console.log('Failed to connect to MongoDB', error);
}

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: [
			'http://localhost:3001',
			'http://localhost:3001/favourites',
			'http://localhost:3001/logout',
		],
	})
);

app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/public'));

app.use('/', homeRouter);
app.use('/', loginRouter);
app.use('/', logoutRouter);
app.use('/', registerRouter);
app.use('/', verifyToken, favouritesRouter);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
