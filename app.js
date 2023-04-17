import express from 'express';
import mongoose from 'mongoose';

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

app.use(express.json());

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
