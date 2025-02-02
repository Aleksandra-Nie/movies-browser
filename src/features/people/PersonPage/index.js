import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setPersonDetails, setPeopleCredits } from "../peopleSlice";
import { getPersonDetailsById, getPersonCreditsById } from "../peopleSlice";
import { selectGenres } from "../../movies/moviesSlice";
import useGenresMap from "../../movies/useGenresMap";
import useWindowSize from "../../Scrollbar/useWindowSize";
import MovieTile from "../../movies/MovieTile";
import { Wrapper } from "../../../common/index";
import { PersonPageTile, PersonName, PersonPhoto } from "../personStyles";
import { BirthInfo, BirthLabel, BirthData, PersonProfile, PersonInformation } from "./styled";
import { MovieTilesContainer, Header } from "../../sharedStyles";
import { fetchPersonDetails, fetchPeopleCredits } from "../fetchPeopleData";
import Loader from "../../Loader";
import ErrorScreen from "../../ErrorScreen";
import personPlaceholder from "../../../images/person.png";

const PersonPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const isTablet = useWindowSize(767);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const personDetails = useSelector(state => getPersonDetailsById(state, id));
    const personCredits = useSelector(state => getPersonCreditsById(state, id));
    const genres = useSelector(selectGenres);

    const genresMap = useGenresMap(genres);

    const formatDateToLocale = (dateString) => {
        const date = new Date(dateString);
        const userLocale = navigator.language || 'pl-PL';
        return new Intl.DateTimeFormat(userLocale, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(date);
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const details = await fetchPersonDetails(id);
                dispatch(setPersonDetails(details));

                const credits = await fetchPeopleCredits(id);
                dispatch(setPeopleCredits(credits));
            } catch (error) {
                setError(error);
                console.error("Error loading data:", error);
            } finally {
                setTimeout(() => setLoading(false), 1000);
            }
        };

        loadData();
    }, [id, dispatch]);

    if (loading) {
        return <Loader />;
    }

    if (loading) {
        return <Loader />;
    } else if (error) {
        return <ErrorScreen />;
    } else if (!personDetails || !personCredits) {
        return <div>No data available</div>;
    } else {

        return (
            <Wrapper>
                <PersonPageTile $personDetails>
                    <PersonPhoto
                        $personDetails
                        src={
                            personDetails.profile_path
                                ? `https://image.tmdb.org/t/p/w400${personDetails.profile_path}`
                                : personPlaceholder}
                    />
                    <PersonInformation>
                        <PersonName $personDetails>{personDetails.name}</PersonName>
                        <BirthInfo>
                            <BirthLabel>
                                Date of birth:
                                <BirthData>{personDetails.birthday ? formatDateToLocale(personDetails.birthday) : "Unknown"}</BirthData>
                            </BirthLabel>
                            <BirthLabel>
                                Place of birth:
                                <BirthData>{personDetails.place_of_birth ? personDetails.place_of_birth : "Unknown"}</BirthData>
                            </BirthLabel>
                        </BirthInfo>
                        {!isTablet && (
                            <PersonProfile>
                                {personDetails.biography ? personDetails.biography : `We don't have a biography for ${personDetails.name}.`}
                            </PersonProfile>)}
                    </PersonInformation>
                    {isTablet && (
                        <PersonProfile>
                            {personDetails.biography ? personDetails.biography : `We don't have a biography for ${personDetails.name}.`}
                        </PersonProfile>)}
                </PersonPageTile>

                {personCredits.cast && (
                    <>
                        <Header>Movies - Cast {`(${personCredits.cast.length})`}</Header>
                        <MovieTilesContainer>
                            {personCredits.cast.map((cast, index) => (
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

                {personCredits.crew && (
                    <>
                        <Header>Movies - Crew {`(${personCredits.crew.length})`}</Header>
                        <MovieTilesContainer>
                            {personCredits.crew.map((crewMember, index) => (
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
            </Wrapper>
        );
    }
};

export default PersonPage;
