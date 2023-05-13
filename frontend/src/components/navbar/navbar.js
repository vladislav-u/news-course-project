import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
	return (
		<>
			<header>
				<div className="name">
					<h1>
						<i class="fa-solid fa-eye"></i>VERSEER
					</h1>
				</div>
				<nav>
					<ul className="nav__links">
						<li className="nav__link">
							<Link to="/login">Login</Link>
						</li>
						<li className="nav__link">
							<Link to="/register">Register</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Navbar;
