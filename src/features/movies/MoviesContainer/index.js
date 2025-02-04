import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryCurrentPage } from "../../useQueryCurrentPage";
import { fetchMoviesRequest, selectGenres, selectMovies } from "../moviesSlice";
import useGenresMap from "../useGenresMap";
import MovieTile from "../MovieTile";
import { MovieTilesContainer, Header } from "../../sharedStyles";

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const currentPage = useQueryCurrentPage();

  useEffect(() => {
    dispatch(fetchMoviesRequest({ page: currentPage }));
  }, [currentPage, dispatch]);

  const moviesData = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const movies = moviesData.results || [];

  const genresMap = useGenresMap(genres);

  return (
    <>
      <Header>Popular movies</Header>
      <MovieTilesContainer>
        {movies.map((movie, index) => (
          <MovieTile
            key={index}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            genre_ids={movie.genre_ids}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            genresMap={genresMap}
          />
        ))}
      </MovieTilesContainer>
    </>
  );
};

export default MoviesContainer;
