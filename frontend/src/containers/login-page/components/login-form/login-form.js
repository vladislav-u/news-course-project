import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login-form.css';

function LoginForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:3000/login', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				console.log(response.data);
				Cookies.set('isLoggedIn', 'true', { expires: 1 });
				navigate('/');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div className="login__wrapper">
				<form className="login" onSubmit={handleSubmit}>
					<p className="title">Log in</p>
					<input
						className="login__input"
						type="Email"
						placeholder="Email"
						autoFocus
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					<input
						className="login__input"
						type="password"
						placeholder="Password"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
					<button className="login__submit" type="submit">
						<span className="state">Log in</span>
					</button>
				</form>
			</div>
		</>
	);
}

export default LoginForm;
