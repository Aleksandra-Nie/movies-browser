import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useQueryCurrentPage } from "../../useQueryCurrentPage";
import { fetchMoviesByQueryRequest, fetchMoviesRequest, selectGenres, selectMovies, selectLoading } from "../moviesSlice";
import useGenresMap from "../useGenresMap";
import MovieTile from "../MovieTile";
import Loader from "../../Loader";
import { MovieTilesContainer, Header } from "../../sharedStyles";
import searchQueryParamName from "../../searchQueryParamName";

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoading = useSelector(selectLoading);
  const currentPage = useQueryCurrentPage();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  useEffect(() => {
    if (!query) {
      dispatch(fetchMoviesRequest({ page: currentPage }));
    } else {
      dispatch(fetchMoviesByQueryRequest(query, { page: currentPage }));
    }
  }, [query, currentPage]);

  const moviesData = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const movies = moviesData?.results || [];
  const loading = useSelector(selectLoading);
  const resultCount = movies ? movies.length : 0;

  const genresMap = useGenresMap(genres);

  return (
    <>
      {loading && <Loader />}
      <Header>
        {query
          ? `Search results for "${query}" (${resultCount})`
          : `Popular movies`}
      </Header>

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
