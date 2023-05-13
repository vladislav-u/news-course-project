import './footer.css';

function Footer() {
	return (
		<>
			<footer>
				<div className="footer__item">
					<div className="footer__title">About Us</div>
					<div className="footer__descr">
						<span>Good</span>
						<span>Smart</span>
						<span>Strong</span>
					</div>
				</div>
				<div className="footer__item">
					<div className="footer__title">Contact Us</div>
					<div className="footer__descr">
						<span>Email: vladislav.ulynets@gmail.com</span>
						<span>Phone: +380509910206</span>
						<span>Telegram: @overseer</span>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
