import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cardSchema = new Schema({
	image: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	sourceName: {
		type: String,
		required: true,
	},
	sourceUrl: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

export default mongoose.model('Card', cardSchema);
