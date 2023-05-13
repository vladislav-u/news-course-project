import { useEffect } from 'react';
import Footer from '../../components/footer/footer.js';
import Navbar from '../../components/navbar/navbar.js';
import LoginForm from './components/login-form/login-form.js';

function LoginPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Navbar />
			<LoginForm />
			<Footer />
		</>
	);
}

export default LoginPage;
