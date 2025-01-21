import exampleMoviePoster from "../../../images/exampleMoviePoster.jpg";
import {
    Tile,
    MoviePoster,
    MovieTileHeader,
    MovieTileYear,
    GenresList,
    Genres,
    MovieRating,
    StyledStarIcon,
    Rating,
    Votes,
} from "./styled";

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
            <MovieRating>
                <StyledStarIcon />
                <Rating>7,8</Rating>
                <Votes>35 votes</Votes>
            </MovieRating>
        </div>
    </Tile>
);

export default MovieTile;