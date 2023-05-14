import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FavouritesPage from './containers/favourites-page/favourites-page.js';
import HomePage from './containers/home-page/home-page.js';
import LoginPage from './containers/login-page/login-page.js';
import RegisterPage from './containers/register-page/register-page.js';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/login" element={<LoginPage />} />
					<Route exact path="/register" element={<RegisterPage />} />
					<Route exact path="/favourites" element={<FavouritesPage />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
