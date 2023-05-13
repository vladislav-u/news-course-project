import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
				</Routes>
			</Router>
		</>
	);
};

export default App;
