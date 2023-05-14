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
		fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
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
