import { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar.js';
import CardList from './components/card-list/card-list.js';
import SearchBar from './components/searchbar/searchbar.js';

function HomePage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Navbar></Navbar>
			<SearchBar></SearchBar>
			<CardList></CardList>
		</>
	);
}

export default HomePage;
