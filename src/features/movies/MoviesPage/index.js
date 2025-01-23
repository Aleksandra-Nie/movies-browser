import MoviesContainer from "../MoviesContainer";
import MoviesScrollbar from "../MoviesScrollbar";
import { Wrapper } from "../../../common/index";

const MoviesPage = () => (
    <Wrapper>
        <MoviesContainer />
        <MoviesScrollbar />
    </Wrapper>
);

export default MoviesPage;