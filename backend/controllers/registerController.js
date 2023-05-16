import { generateJwtToken } from '../helpers/token-generator.js';
import { User } from '../models/userModel.js';

export const registerView = (req, res) => {
	res.render('register');
};

export const registerUser = async (req, res) => {
	const userEmail = await User.findOne({
		email: req.body.email,
	});
	const userName = await User.findOne({
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
		const user = new User({
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
		});

		user.token = generateJwtToken(user._id);

		await user.save();

		res.status(201).json(user);
	}
};
