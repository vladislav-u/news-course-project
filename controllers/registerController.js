import { userModel } from '../models/userModel.js';

export const registerView = (req, res) => {
	res.render('register');
};

export const registerUser = async (req, res) => {
	let userEmail = await userModel.findOne({
		email: req.body.email,
	});
	let userName = await userModel.findOne({
		username: req.body.username,
	});

	if (userEmail) {
		console.log('Email already registered');
		res.status(400).render('register', {
			error: 'User already exists',
		});
	} else if (userName) {
		console.log('Username already registered');
		res.status(400).render('register', {
			error: 'User already exists',
		});
	} else {
		user = new userModel({
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
		});

		await user.save();

		console.log(user);
		res.redirect('/');
	}
};
