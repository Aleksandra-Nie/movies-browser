
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPersonCreditsById, getPersonDetailsById } from "../peopleSlice";
import { selectGenres } from "../../movies/moviesSlice";
import useGenresMap from "../../movies/useGenresMap";
import useWindowSize from "../../Scrollbar/useWindowSize";
import MovieTile from "../../movies/MovieTile";
import { Wrapper } from "../../../common/index";
import { Tile, PersonName, PersonPhoto } from "../personStyles";
import { BirthInfo, BirthLabel, BirthData, PersonProfile, PersonInformation } from "./styled";
import { MovieTilesContainer, Header } from "../../sharedStyles";

const PersonPage = () => {
    const { id } = useParams();
    const isTablet = useWindowSize(767);
    const personDetails = useSelector(state => getPersonDetailsById(state, id));
    const personCredits = useSelector(state => getPersonCreditsById(state, id));
    const genres = useSelector(selectGenres);
    const casts = personCredits.cast;
    const crew = personCredits.crew;

    const genresMap = useGenresMap(genres);

    console.log(personCredits);
    return (
        <Wrapper>
            <>
                {personDetails && (
                    <Tile $personDetails>
                        <PersonPhoto
                            $personDetails
                            src={`https://image.tmdb.org/t/p/w400${personDetails.profile_path}`}
                        />
                        <PersonInformation>
                            <PersonName $personDetails>{personDetails.name}</PersonName>
                            <BirthInfo>
                                <BirthLabel>Date of birth:<BirthData>{personDetails.birthday}</BirthData></BirthLabel>
                                <BirthLabel>Place of birth:<BirthData>{personDetails.place_of_birth}</BirthData></BirthLabel>
                            </BirthInfo>
                            {!isTablet && (<PersonProfile>{personDetails.biography}</PersonProfile>)}
                        </PersonInformation>
                        {isTablet && (<PersonProfile>{personDetails.biography}</PersonProfile>)}
                    </Tile>
                )}
                {casts && (
                    <>
                        <Header>Movies - cast {`(`}{casts.length}{`)`}</Header>
                        <MovieTilesContainer>
                            {casts.map((cast, index) => (
                                <MovieTile
                                    key={index}
                                    id={cast.id}
                                    title={cast.title}
                                    poster_path={cast.poster_path}
                                    release_date={cast.release_date}
                                    genre_ids={cast.genre_ids}
                                    vote_average={cast.vote_average}
                                    vote_count={cast.vote_count}
                                    genresMap={genresMap}
                                />
                            ))}
                        </MovieTilesContainer>
                    </>
                )}
                {crew && (
                    <>
                        <Header>Movies - crew {`(`}{crew.length}{`)`}</Header>
                        <MovieTilesContainer>
                            {crew.map((crewMember, index) => (
                                <MovieTile
                                    key={index}
                                    id={crewMember.id}
                                    title={crewMember.title}
                                    poster_path={crewMember.poster_path}
                                    release_date={crewMember.release_date}
                                    genre_ids={crewMember.genre_ids}
                                    vote_average={crewMember.vote_average}
                                    vote_count={crewMember.vote_count}
                                    genresMap={genresMap}
                                />
                            ))}
                        </MovieTilesContainer>
                    </>
                )}
            </>
        </Wrapper>
    );
};

export default PersonPage;