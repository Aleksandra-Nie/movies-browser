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
                    <div>
                        <MovieTileHeader>{movie.title}</MovieTileHeader>
                        <MovieTileYear>{(movie.release_date).slice(0, 4)}</MovieTileYear>
                        <MovieRating>
                            <StyledStarIcon />
                            <Rating>{(movie.vote_average).toFixed(1)}</Rating>
                            <Votes>{movie.vote_count} votes</Votes>
                        </MovieRating>
                    </div>
                </Tile>
            ))}
        </>
    );
};

export default MovieTile;