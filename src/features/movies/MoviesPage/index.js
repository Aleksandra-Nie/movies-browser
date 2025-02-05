import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchMovies, fetchMoviesByQuery } from "../fetchMoviesData";
import { selectMovies, selectTotalPages, setMovies, setTotalPages } from "../moviesSlice";
import MoviesContainer from "../MoviesContainer";
import Scrollbar from "../../Scrollbar";
import NoResults from "../../NoResults";
import { Wrapper } from "../../../common/index";
import searchQueryParamName from "../../searchQueryParamName";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get(searchQueryParamName);

  const moviesData = useSelector(selectMovies);
  const movies = moviesData.results;

  if (!searchParams) {
    dispatch(setTotalPages(500));
  }

  if (!searchParams) {
    return (
      <Wrapper>
        <MoviesContainer />
        <Scrollbar
          fetchData={fetchMovies}
          setData={setMovies}
          selectTotalPages={selectTotalPages}
        />
      </Wrapper>
    );
  }

  if (Array.isArray(movies) && movies.length === 0) {
    return (<NoResults />);
  }

  return (
    <Wrapper>
      <MoviesContainer />
      {searchParams ? (
        <Scrollbar
          fetchData={fetchMoviesByQuery}
          setData={setMovies}
          selectTotalPages={selectTotalPages}
        />
      ) : (
        <Scrollbar
          fetchData={fetchMovies}
          setData={setMovies}
          selectTotalPages={selectTotalPages}
        />
      )}
    </Wrapper>
  );
};

export default MoviesPage;
