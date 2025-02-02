import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setPersonDetails, setPeopleCredits } from "../peopleSlice"; // Akcje Redux
import { getPersonDetailsById, getPersonCreditsById } from "../peopleSlice"; // Selektory Redux
import { selectGenres } from "../../movies/moviesSlice"; // Wybór gatunków
import useGenresMap from "../../movies/useGenresMap"; // Mapa gatunków
import useWindowSize from "../../Scrollbar/useWindowSize"; // Hook na rozmiar okna
import MovieTile from "../../movies/MovieTile"; // Komponent wyświetlający filmy
import { Wrapper } from "../../../common/index"; // Wrapper dla komponentu
import { PersonPageTile, PersonName, PersonPhoto } from "../personStyles"; // Stylizacje
import { BirthInfo, BirthLabel, BirthData, PersonProfile, PersonInformation } from "./styled"; // Dodatkowe stylizacje
import { MovieTilesContainer, Header } from "../../sharedStyles"; // Stylizacja dla sekcji filmów
import { fetchPersonDetails, fetchPeopleCredits } from "../fetchPeopleData"; // Funkcje do pobierania danych
import Loader from "../../Loader";
import ErrorScreen from "../../ErrorScreen";
import personPlaceholder from "../../../images/person.png";

const PersonPage = () => {
    const { id } = useParams(); // Pobranie id osoby z URL
    const dispatch = useDispatch();

    const isTablet = useWindowSize(767); // Sprawdzamy, czy to urządzenie mobilne
    const [loading, setLoading] = useState(true); // Stan ładowania danych
    const [error, setError] = useState(null); // Stan błędu

    // Dane pobrane z Redux
    const personDetails = useSelector(state => getPersonDetailsById(state, id));
    const personCredits = useSelector(state => getPersonCreditsById(state, id));
    const genres = useSelector(selectGenres);

    const genresMap = useGenresMap(genres);

    const formatDateToPL = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('pl-PL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(date);
    };

    // Asynchroniczne ładowanie danych po zamontowaniu komponentu
    useEffect(() => {
        const loadData = async () => {
            setLoading(true); // Ustawiamy loading na true przed pobraniem danych
            try {
                const details = await fetchPersonDetails(id);  // Pobieramy dane osoby
                dispatch(setPersonDetails(details));  // Zapisujemy dane w Redux

                const credits = await fetchPeopleCredits(id);  // Pobieramy kredyty osoby (filmy)
                dispatch(setPeopleCredits(credits));  // Zapisujemy kredyty w Redux
            } catch (error) {
                setError(error);  // Obsługujemy błąd
                console.error("Error loading data:", error);
            } finally {
                setTimeout(() => setLoading(false), 1000);  // Po zakończeniu ładowania
            }
        };

        loadData();
    }, [id, dispatch]); // Uruchamiamy efekt przy zmianie id osoby

    // Jeżeli dane są w trakcie ładowania, wyświetlamy komunikat
    if (loading) {
        return <Loader />;
    }

    // Jeśli wystąpił błąd, wyświetlamy komunikat
    if (loading) {
        return <Loader />;
    } else if (error) {
        return <ErrorScreen />;
    } else if (!personDetails || !personCredits) {
        return <div>No data available</div>;  // Nowy warunek
    } else {

        // Renderowanie komponentu, gdy dane są załadowane
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
                                <BirthData>{personDetails.birthday ? formatDateToPL(personDetails.birthday) : "Unknown"}</BirthData>
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
