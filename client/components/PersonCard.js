import style from './scss/PersonCard.module.scss';
import { Card } from 'react-bootstrap';
import getImageUrl from '../hooks/get-image-url';

const PersonCard = ({ person }) => {
	return (
		<div className={style.person}>
			<Card>
				<Card.Img
					className={style.personImage}
					variant="top"
					src={getImageUrl(person.profile_path)}
				/>
				<Card.Body className={style.overview}>
					<Card.Title className={style.name}>
						{person.name}
					</Card.Title>
				</Card.Body>
			</Card>
		</div>
	);
};

export default PersonCard;
