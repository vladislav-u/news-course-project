import bcrypt from 'bcrypt';
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
	},
	token: {
		type: String,
	},
});

userSchema.pre('save', async function (next) {
	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		next();
	} catch (error) {
		next(error);
	}
});

export const userModel = mongoose.model('userModel', userSchema);
