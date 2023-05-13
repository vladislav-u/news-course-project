import { generateJwtToken } from '../helpers/token-generator.js';
import { userModel } from '../models/userModel.js';

export const registerView = (req, res) => {
	res.render('register');
};

export const registerUser = async (req, res) => {
	const userEmail = await userModel.findOne({
		email: req.body.email,
	});
	const userName = await userModel.findOne({
		username: req.body.username,
	});

	if (userEmail) {
		console.log('Email already registered');
		res.status(400).json({
			error: 'User already exists',
		});
	} else if (userName) {
		console.log('Username already registered');
		res.status(400).json({
			error: 'User already exists',
		});
	} else {
		const user = new userModel({
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
		});

		user.token = generateJwtToken(user._id);

		await user.save();

		res.status(201).json(user);
	}
};
