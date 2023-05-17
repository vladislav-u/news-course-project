import { useEffect } from 'react';
import Footer from '../../components/footer/footer.js';
import Navbar from '../../components/navbar/navbar.js';
import CardList from './components/card-list/card-list.js';

function HomePage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Navbar />
			<CardList />
			<Footer />
		</>
	);
}

export default HomePage;
