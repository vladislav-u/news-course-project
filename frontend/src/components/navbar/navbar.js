import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
	const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn'));

	const handleLogout = async () => {
		const axiosInstance = axios.create({
			withCredentials: true,
		});

		const options = {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true',
			},
		};

		try {
			await axiosInstance.get('http://localhost:3000/logout', options);
			console.log('Logout successful');
			Cookies.remove('isLoggedIn');
			setIsLoggedIn(null);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setIsLoggedIn(Cookies.get('isLoggedIn'));
	}, []);

	return (
		<>
			<header>
				<div className="name">
					<NavLink exact to="/" onClick={() => window.location.reload()}>
						<h1>
							<i className="fa-solid fa-eye"></i>VERSEER
						</h1>
					</NavLink>
				</div>
				<nav>
					{isLoggedIn ? (
						<ul className="nav__links">
							<li className="nav__link">
								<Link to="/favourites">Favourites</Link>
							</li>
							<li className="nav__link">
								<button className="nav__link" onClick={handleLogout}>
									Logout
								</button>
							</li>
						</ul>
					) : (
						<ul className="nav__links">
							<li className="nav__link">
								<Link to="/login">Login</Link>
							</li>
							<li className="nav__link">
								<Link to="/register">Register</Link>
							</li>
						</ul>
					)}
				</nav>
			</header>
		</>
	);
}

export default Navbar;
