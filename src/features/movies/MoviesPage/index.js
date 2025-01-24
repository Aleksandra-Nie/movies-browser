import { fetchMovies } from "../fetchMoviesData";
import { selectCurrentPage, selectTotalPages, setCurrentPage, setMovies } from "../moviesSlice";
import MoviesContainer from "../MoviesContainer";
import Scrollbar from "../../Scrollbar";
import { Wrapper } from "../../../common/index";

const MoviesPage = () => (
    <Wrapper>
        <MoviesContainer />
        <Scrollbar
            fetchData={fetchMovies}
            setData={setMovies}
            setCurrentPage={setCurrentPage}
            selectCurrentPage={selectCurrentPage}
            selectTotalPages={selectTotalPages}
        />
    </Wrapper>
);

export default MoviesPage;