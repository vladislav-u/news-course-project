import jwt from 'jsonwebtoken';
import { TOKEN_KEY } from '../config.js';

const verifyToken = (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res.status(403).send({
			message: 'Token required for authentication.',
		});
	}
	try {
		req.user = jwt.verify(token, TOKEN_KEY);
	} catch (error) {
		return res.status(401).send('Invalid token.');
	}
	return next();
};

export default verifyToken;
