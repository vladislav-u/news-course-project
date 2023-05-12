export const homeView = (req, res) => {
	const url =
		'https://gnews.io/api/v4/top-headlines?category=general&lang=ua&country=ua&max=10&apikey=' +
		process.env.GNEWS_KEY;

	let articles = [];
	async function getArticles() {
		await fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				articles = data.articles;
			});

		res.render('index', { articles: articles });
	}

	getArticles();
};

export const homeSearch = (req, res) => {
	const url =
		'https://gnews.io/api/v4/search?q=' +
		req.query.searchQuery +
		'&apikey=' +
		process.env.GNEWS_KEY;

	let articles = [];
	async function getArticles() {
		await fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				articles = data.articles;
			});

		res.render('index', { articles: articles });
	}

	getArticles();
};
