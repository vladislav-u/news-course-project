/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios';
import './card.css';

function Card(props) {
	const { image, title, description, url, sourceName, sourceUrl, date } = props;

	const handleFavourite = async () => {
		const axiosInstance = axios.create({
			withCredentials: true,
		});

		const options = {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true',
			},
		};

		await axiosInstance
			.post(
				'http://localhost:3000/favourites',
				{
					image,
					url,
					title,
					description,
					sourceName,
					sourceUrl,
					date,
				},
				options
			)
			.then((response) => {
				console.log(response.data);
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div className="card__container">
				<div className="card">
					<div className="card__header">
						<img
							src={image}
							className="card__image"
							width="600"
							alt="News Photo"
						/>
					</div>
					<div className="card__body">
						<a href={url}>{title}</a>
						<p>{description}</p>
					</div>
					<div className="card__footer">
						<div className="user">
							<div className="user__info">
								<a href={sourceUrl}>{sourceName}</a>
								<small>{date}</small>
							</div>
						</div>
						<div className="favourite">
							<button className="favourite__button" onClick={handleFavourite}>
								<i className="fa-solid fa-star fa-2xl"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
