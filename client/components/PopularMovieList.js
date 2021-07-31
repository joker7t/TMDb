import MovieList from './MovieList';
import { useEffect, useState } from 'react';
import { MOVIE_API, SERVER_API } from '../apis/constants';
import axios from 'axios';

const PopularMovieList = () => {
	const [movies, setMovies] = useState([]);
	const [hasError, setHasError] = useState(false);

	useEffect(async () => {
		try {
			const { data } = await axios.get(`${SERVER_API}${MOVIE_API}`);
			setMovies(data.docs);
		} catch (e) {
			setHasError(true);
		}
	}, []);

	return (
		<div>
			<div className="section-title">Popular</div>
			<MovieList movies={movies} fetchError={hasError} />
		</div>
	);
};

export default PopularMovieList;