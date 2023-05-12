import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.js';

function HomePage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<CardList></CardList>
		</>
	);
}

export default HomePage;
