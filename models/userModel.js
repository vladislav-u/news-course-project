import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		minLength: 4,
		maxLength: 20,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		unique: true,
		minLength: 8,
		maxLength: 30,
	},
});

export const userModel = mongoose.model('userModel', userSchema);
