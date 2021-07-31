import { useEffect } from 'react';
import { MOVIE_API } from '../apis/constants';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';

const LandingPage = ({ movies }) => {
	useEffect(() => {
		console.log(movies);
	}, []);

	return (
		<Container>
			<Banner />
		</Container>
	);
};

LandingPage.getInitialProps = async (context, client) => {
	try {
		const { data } = await client.get(MOVIE_API);
		return { movies: data.docs };
	} catch (e) {
		return { movies: [] };
	}
};

export default LandingPage;