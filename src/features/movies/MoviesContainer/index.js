import MovieTile from "../MovieTile";
import { StyledMoviesContainer, Header, MovieTilesContainer } from "./styled";

const MoviesContainer = () => (
    <StyledMoviesContainer>
        <Header>Popular movies</Header>
        <MovieTilesContainer>
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
        </MovieTilesContainer>
    </StyledMoviesContainer>
);

export default MoviesContainer;