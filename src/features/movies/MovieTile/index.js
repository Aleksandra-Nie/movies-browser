import exampleMoviePoster from "../../../images/exampleMoviePoster.jpg";
import { Tile, MoviePoster, MovieTileHeader, MovieTileYear, GenresList, Genres } from "./styled";

const MovieTile = () => (
    <Tile>
        <MoviePoster src={exampleMoviePoster} alt="movie poster" />
        <div>
            <MovieTileHeader>Mulan</MovieTileHeader>
            <MovieTileYear>2020</MovieTileYear>
            <GenresList>
                <Genres>Action</Genres>
                <Genres>Adventure</Genres>
                <Genres>Drama</Genres>
            </GenresList>
        </div>
    </Tile>
);

export default MovieTile;