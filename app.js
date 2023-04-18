import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
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
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
	res.render('index');
});

app.use('/', loginRouter);
app.use('/', registerRouter);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
