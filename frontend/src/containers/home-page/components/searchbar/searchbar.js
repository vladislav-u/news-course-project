import axios from 'axios';
import { useState } from 'react';
import Card from '../card/card.js';
import './searchbar.css';

function SearchBar({ clearCardList }) {
	const [query, setQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = () => {
		console.log(query);
		axios
			.get(`http://localhost:3000/search?query="${query}"`)
			.then((response) => {
				setSearchResults(response.data);
				clearCardList();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="search__container">
			<input
				className="search__input"
				type="text"
				placeholder="Search"
				name="query"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className="search__button" onClick={handleSearch}>
				<i className="fa-solid fa-magnifying-glass fa-xl"></i>
			</button>

			<ul className="card__list">
				{searchResults.map(
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
		</div>
	);
}

export default SearchBar;
