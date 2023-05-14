import jwt from 'jsonwebtoken';
import { cardModel } from '../models/cardModel.js';

export const favouritesView = async (req, res) => {
	const cards = await Card.find();
	res.json(cards);
};

export const addFavourite = async (req, res) => {
	const cardExists = cardModel.findOne({
		title: req.body.title,
	});

	if (cardExists) {
		await cardModel.findByIdAndDelete(cardExists.id);
		return res.status(200).json({
			message: 'Card removed from favorites',
		});
	} else {
		const decodedToken = jwt.decode(req.cookies.token);
		const userId = decodedToken._id;

		const card = new cardModel({
			image: req.body.image,
			title: req.body.title,
			description: req.body.description,
			url: req.body.url,
			sourceName: req.body.source.name,
			sourceUrl: req.body.source.url,
			date: req.body.date,
			user: userId,
		});

		await card.save();
		return res.status(201).json(card);
	}
};
