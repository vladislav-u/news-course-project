import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './containers/home-page/home-page.js';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
