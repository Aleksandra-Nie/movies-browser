import MoviesContainer from "../MoviesContainer";
import Scrollbar from "../../Scrollbar";
import { Wrapper } from "../../../common/index";

const MoviesPage = () => (
    <Wrapper>
        <MoviesContainer />
        <Scrollbar />
    </Wrapper>
);

export default MoviesPage;