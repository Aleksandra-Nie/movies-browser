import MoviesContainer from "../MoviesContainer";
import MoviesScrollbar from "../MoviesScrollbar";
import { Wrapper } from "./styled";

const MoviesPage = () => (
    <Wrapper>
        <MoviesContainer />
        <MoviesScrollbar />
    </Wrapper>
);

export default MoviesPage;