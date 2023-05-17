import bcrypt from 'bcrypt';
import { generateJwtToken } from '../helpers/token-generator.js';
import { User } from '../models/userModel.js';

export const loginUser = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user && (await bcrypt.compareSync(password, user.password))) {
		user.token = generateJwtToken(user._id);
		res.cookie('token', user.token, {
			maxAge: 24 * 60 * 60 * 1000,
			httpOnly: true,
		});

		return res.json({
			message: 'Logined successfully',
		});
	} else {
		res.status(400).json({
			error: 'Email or password is incorrect',
		});
	}
};
