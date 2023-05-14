import bcrypt from 'bcrypt';
import { generateJwtToken } from '../helpers/token-generator.js';
import { userModel } from '../models/userModel.js';

export const loginUser = async (req, res) => {
	const user = await userModel.findOne({ email: req.body.email });

	if (user && (await bcrypt.compareSync(req.body.password, user.password))) {
		user.token = generateJwtToken(user._id);
		res.cookie('token', user.token, { maxAge: 3600 * 24 });

		res.json({
			message: 'Loginned successfully.',
		});
	} else {
		res.status(400).json({
			error: 'Email or password is incorrect',
		});
	}
};
