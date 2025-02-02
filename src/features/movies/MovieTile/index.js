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
import cameraIcon from "../../../images/camera.png";

const MovieTile = ({
    id,
    title,
    poster_path,
    release_date,
    genre_ids,
    genresMap,
    vote_average,
    vote_count,
}) => {
    return (
        <Tile key={id}>
            <MoviePoster
                src={poster_path ? `https://image.tmdb.org/t/p/w400${poster_path}` : cameraIcon}
                alt={`${title} poster`}
            />
            <div>
                <MovieTileHeader>{title}</MovieTileHeader>
                <MovieTileYear>{release_date?.slice(0, 4)}</MovieTileYear>
                <GenresList>
                    {genre_ids.map((id) => (
                        <Genres key={id}>
                            {genresMap[id] || "Unknown"}
                        </Genres>
                    ))}
                </GenresList>
                <MovieRating>
                    <StyledStarIcon />
                    <Rating>{vote_average.toFixed(1)}</Rating>
                    <Votes>{vote_count} votes</Votes>
                </MovieRating>
            </div>
        </Tile>
    );
};

export default MovieTile;