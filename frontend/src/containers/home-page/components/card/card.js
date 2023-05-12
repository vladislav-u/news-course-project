/* eslint-disable jsx-a11y/img-redundant-alt */
import './card.css';

function Card(props) {
	const { image, title, description, url, source, publishedAt } = props;
	const date =
		props.publishedAt.split('T')[0] +
		' ' +
		props.publishedAt.split('T')[1].slice(0, -1);

	return (
		<>
			<div className="container">
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
								<a href={source.url}>{source.name}</a>
								<small>{date}</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
