import jwt from 'jsonwebtoken';
import { TOKEN_KEY } from '../config.js';

export const generateJwtToken = (_id) => {
	return jwt.sign({ user_id: _id }, TOKEN_KEY, {
		expiresIn: '24h',
	});
};
