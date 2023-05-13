import { useEffect } from 'react';
import Footer from '../../components/footer/footer.js';
import Navbar from '../../components/navbar/navbar.js';
import CardList from './components/card-list/card-list.js';
import SearchBar from './components/searchbar/searchbar.js';

function HomePage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Navbar />
			<SearchBar />
			<CardList />
			<Footer />
		</>
	);
}

export default HomePage;
