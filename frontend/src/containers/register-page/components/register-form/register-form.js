import React, { useState } from 'react';
import './register-form.css';

function RegisterForm() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:5000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
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
			<div className="wrapper">
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
