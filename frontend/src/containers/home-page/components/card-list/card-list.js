import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../card/card.js';
import SearchBar from '../searchbar/searchbar.js';
import './card-list.css';

function CardList({ children }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3000/')
			.then((response) => setData(response.data))
			.catch((error) => console.error('Error fetching data: ', error));
	}, []);

	const clearCardList = () => {
		setData([]);
	};

	return (
		<>
			<div className="description__container">
				<h1 className="description__title">
					<i className="fa-solid fa-eye"></i>VERSEER
				</h1>
				<br />
				<p className="description__text">News for you!</p>
			</div>
			<SearchBar clearCardList={clearCardList} />

			<ul className="card__list">
				{data.map(
					({ image, title, description, url, source, publishedAt }, index) => (
						<Card
							key={index}
							title={title}
							description={description}
							image={image}
							url={url}
							source={source}
							publishedAt={publishedAt}
						/>
					)
				)}
			</ul>
			{children}
		</>
	);
}

export default CardList;
