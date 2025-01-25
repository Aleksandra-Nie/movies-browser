import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesRequest, selectGenres, selectMovies } from "../moviesSlice";
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
import useGenresMap from "../useGenresMap";

const MovieTile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesRequest());
    }, []);

    const movies = useSelector(selectMovies);
    const genres = useSelector(selectGenres);

    const genresMap = useGenresMap(genres);

    return (
        <>
            {movies.map((movie) => (
                <Tile key={movie.id}>
                    <MoviePoster
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`${movie.title} poster`}
                    />
                    <div>
                        <MovieTileHeader>{movie.title}</MovieTileHeader>
                        <MovieTileYear>{(movie.release_date).slice(0, 4)}</MovieTileYear>
                        <GenresList>
                            {movie.genre_ids.map((id) => (
                                <Genres key={id}>
                                    {genresMap[id] || "Unknown"}
                                </Genres>
                            ))}
                        </GenresList>
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