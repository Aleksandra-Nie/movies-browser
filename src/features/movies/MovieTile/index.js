import exampleMoviePoster from "../../../images/exampleMoviePoster.jpg";
import { Tile, MoviePoster } from "./styled";

const MovieTile = () => (
    <Tile>
        <MoviePoster src={exampleMoviePoster} alt="movie poster" />
    </Tile>
);

export default MovieTile;