import { GNEWS_KEY } from '../config.js';

export const homeView = (req, res) => {
	const url =
		'https://gnews.io/api/v4/top-headlines?category=general&lang=ua&country=ua&max=10&apikey=' +
		GNEWS_KEY;

	let articles = [];
	async function getArticles() {
		await fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				articles = data.articles;
			});

		res.json(articles);
	}

	getArticles();
};

export const homeSearch = (req, res) => {
	const url =
		'https://gnews.io/api/v4/search?q=' +
		req.query.query +
		'&apikey=' +
		GNEWS_KEY;

	let articles = [];
	async function getArticles() {
		await fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				articles = data.articles;
			});

		res.json(articles);
	}

	getArticles();
};
