import jwt from 'jsonwebtoken';
import Card from '../models/cardModel.js';

export const favouritesView = async (req, res) => {
	const cards = await Card.find();
	res.json(cards);
};

export const addFavourite = async (req, res) => {
	const cardExists = await Card.findOne({
		title: req.body.title,
	});

	if (cardExists) {
		await Card.findByIdAndDelete(cardExists.id);
		return res.status(200).json({
			message: 'Card removed from favorites',
		});
	} else {
		const decodedToken = jwt.decode(req.cookies.token);
		const userId = decodedToken.user_id;

		const card = new Card({
			image: req.body.image,
			title: req.body.title,
			description: req.body.description,
			url: req.body.url,
			sourceName: req.body.sourceName,
			sourceUrl: req.body.sourceUrl,
			date: req.body.date,
			user: userId,
		});

		await card.save();
		return res.status(201).json(card);
	}
};
