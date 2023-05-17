export const logoutUser = (req, res) => {
	res.clearCookie('token');
	res.json({
		message: 'User logged out',
	});
};
