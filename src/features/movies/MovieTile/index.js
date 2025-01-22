import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesRequest, selectGenres, selectMovies } from "../moviesSlice";
import exampleMoviePoster from "../../../images/exampleMoviePoster.jpg";
import {
    Tile,
    MoviePoster,
    MovieTileHeader,
    MovieTileYear,
    GenresList,
    Genres,
    MovieRating,
    StyledStarIcon,
    Rating,
    Votes,
} from "./styled";

const MovieTile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesRequest());
    }, []);

    const movies = useSelector(selectMovies);
    const genres = useSelector(selectGenres);

    return (
        <>
            {movies.map((movie) => (
                <Tile key={movie.id}>
                    <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </Tile>
            ))}
        </>
    );
};

export default MovieTile;