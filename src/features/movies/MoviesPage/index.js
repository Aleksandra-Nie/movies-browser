import { fetchMovies } from "../fetchMoviesData";
import { selectTotalPages, setMovies } from "../moviesSlice";
import MoviesContainer from "../MoviesContainer";
import Scrollbar from "../../Scrollbar";
import { Wrapper } from "../../../common/index";

const MoviesPage = () => (
  <Wrapper>
    <MoviesContainer />
    <Scrollbar
      fetchData={fetchMovies}
      setData={setMovies}
      selectTotalPages={selectTotalPages}
    />
  </Wrapper>
);

export default MoviesPage;
