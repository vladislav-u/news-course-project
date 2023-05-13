import { useEffect } from 'react';
import Footer from '../../components/footer/footer.js';
import Navbar from '../../components/navbar/navbar.js';
import RegisterForm from './components/register-form/register-form.js';

function RegisterPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Navbar />
			<RegisterForm />
			<Footer />
		</>
	);
}

export default RegisterPage;
