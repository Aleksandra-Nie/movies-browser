import { useLocation } from "react-router-dom";
import { fetchMovies, fetchMoviesByQuery } from "../fetchMoviesData";
import { selectTotalPages, setMovies } from "../moviesSlice";
import MoviesContainer from "../MoviesContainer";
import Scrollbar from "../../Scrollbar";
import { Wrapper } from "../../../common/index";
import searchQueryParamName from "../../searchQueryParamName";

const MoviesPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get(searchQueryParamName);

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
