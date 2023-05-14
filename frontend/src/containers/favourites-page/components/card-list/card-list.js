import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Card from '../card/card.js';
import './card-list.css';

function CardList({ children }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/favourites', {
				withCredentials: true,
			})
			.then((response) => {
				setData(response.data);
				console.log(response.data);
			})
			.catch((error) => console.error('Error fetching data: ', error));
	}, []);

	return (
		<>
			<ul className="card__list">
				{data.map(
					({ image, title, description, url, sourceName, sourceUrl, date }) => (
						<Card
							title={title}
							description={description}
							image={image}
							url={url}
							sourceName={sourceName}
							sourceUrl={sourceUrl}
							date={date}
						/>
					)
				)}
			</ul>
			{children}
		</>
	);
}

export default CardList;
