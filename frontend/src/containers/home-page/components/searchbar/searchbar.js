import axios from 'axios';
import { useState } from 'react';
import './searchbar.css';

function SearchBar() {
	const [query, setQuery] = useState('');

	const handleSearch = () => {
		axios
			.get(`http://localhost:3000/search?query=${query}`)
			.then((response) => {
				console.log(response.data);
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
		</div>
	);
}

export default SearchBar;
