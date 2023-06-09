import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register-form.css';

function RegisterForm() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:3000/register', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				console.log(response.data);
				navigate('/login');
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
			<div className="register__wrapper">
				<form className="register" onSubmit={handleSubmit}>
					<p className="title">Register</p>
					<input
						className="register__input"
						type="text"
						placeholder="Username"
						autoFocus
						name="username"
						value={formData.username}
						onChange={handleChange}
					/>
					<input
						className="register__input"
						type="email"
						placeholder="Email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					<input
						className="register__input"
						type="password"
						placeholder="Password"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
					<button className="register__submit" type="submit">
						<span className="state">Register</span>
					</button>
				</form>
			</div>
		</>
	);
}

export default RegisterForm;
