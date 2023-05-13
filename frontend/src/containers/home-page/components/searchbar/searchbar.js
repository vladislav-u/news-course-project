import { useState } from 'react';
import './searchbar.css';

function SearchBar() {
	const [query, setQuery] = useState('');

	const handleSearch = () => {
		fetch(`http://localhost:5000/search?query=${query}`)
			.then((response) => response.json())
			.then((data) => {
				// handle response data
				console.log(data);
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
				<i class="fa-solid fa-magnifying-glass fa-xl"></i>
			</button>
		</div>
	);
}

export default SearchBar;
