import jwt from 'jsonwebtoken';

export const generateJwtToken = (id) => {
	return jwt.sign({ user_id: id }, process.env.TOKEN_KEY, {
		expiresIn: '24h',
	});
};
