import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getMovieDetailsById,
  getMovieCreditsById,
  setMovieDetails,
  setMovieCredits,
} from "../moviesSlice";
import Loader from "../../Loader";
import ErrorScreen from "../../ErrorScreen";
import { fetchMovieDetails, fetchMovieCredits } from "../fetchMoviesData";
import IntroductionLayer from "../MovieDetails/IntroductionLayer";
import { Wrapper as Container } from "../../../common/index";
import {
  Wrapper,
  MovieTile,
  Poster,
  MovieSection,
  Header,
  Year,
  DetailsContainer,
  LineContainer,
  Caption,
  Text,
  Genres,
  GenresList,
  MovieRating,
  StyledStarIcon,
  Rating,
  Votes,
  MaxRating,
  Description,
  Title,
  Section,
  PeopleContainer,
  PeopleTile,
  Image,
  PeopleName,
  PeopleRole,
} from "./styled";

import exampleMoviePoster from "../../../images/exampleMoviePoster.png";
import exampleCast from "../../../images/person.png";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const movieDetails = useSelector((state) => getMovieDetailsById(state, id));
  const movieCredits = useSelector((state) => getMovieCreditsById(state, id));

  const formatDateToLocale = (dateString) => {
    const date = new Date(dateString);
    const userLocale = "pl-PL";
    return new Intl.DateTimeFormat(userLocale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const details = await fetchMovieDetails(id);
        const credits = await fetchMovieCredits(id);

        dispatch(setMovieDetails(details));
        dispatch(setMovieCredits(credits));
      } catch (error) {
        setError(error);
        console.error("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <ErrorScreen />;
  } else if (!movieDetails) {
    return <div>Loading movie details...</div>;
  } else if (!movieCredits) {
    return <div>Loading movie credits...</div>;
  }

  return (
    <>
      <IntroductionLayer
        title={movieDetails.title}
        rating={movieDetails.vote_average}
        votes={movieDetails.vote_count}
        backdropPath={movieDetails.backdrop_path}
      />

      <Container>
        <MovieTile $movieDetails>
          <Poster
            $movieDetails
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : exampleMoviePoster
            }
            alt={movieDetails.title}
          />
          <MovieSection>
            <Header>{movieDetails.title}</Header>
            <Year>
              {movieDetails.release_date
                ? movieDetails.release_date.split("-")[0]
                : "Unknown"}
            </Year>
            <DetailsContainer>
              <LineContainer>
                <Caption>Production:</Caption>
                <Text>
                  {movieDetails.production_countries
                    ?.map((country) => country.name)
                    .join(", ") || "Unknown"}
                </Text>
              </LineContainer>
              <LineContainer>
                <Caption>Release date:</Caption>
                <Text>
                  {movieDetails.release_date
                    ? formatDateToLocale(movieDetails.release_date)
                    : "Unknown"}
                </Text>
              </LineContainer>
            </DetailsContainer>
            <GenresList>
              {movieDetails.genres?.map((genre) => (
                <Genres key={genre.id}>{genre.name}</Genres>
              ))}
            </GenresList>
            <MovieRating>
              <StyledStarIcon />
              <Rating>{movieDetails.vote_average?.toFixed(1) || "N/A"}</Rating>
              <MaxRating>/ 10</MaxRating>
              <Votes>{movieDetails.vote_count} votes</Votes>
            </MovieRating>
          </MovieSection>
          <Description>
            {movieDetails.overview || "No description available."}
          </Description>
        </MovieTile>
      </Container>

      {movieCredits && (
        <>
          <Section>
            <Title>Cast ({movieCredits.cast?.length || 0})</Title>
            <PeopleContainer>
              {movieCredits.cast?.map((actor) => (
                <PeopleTile key={actor.id}>
                  <Image
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : exampleCast
                    }
                    alt={actor.name}
                  />
                  <PeopleName>{actor.name}</PeopleName>
                  <PeopleRole>{actor.character}</PeopleRole>
                </PeopleTile>
              ))}
            </PeopleContainer>
          </Section>

          <Section>
            <Title>Crew ({movieCredits.crew?.length || 0})</Title>
            <PeopleContainer>
              {movieCredits.crew?.map((crew) => (
                <PeopleTile key={crew.id}>
                  <Image
                    src={
                      crew.profile_path
                        ? `https://image.tmdb.org/t/p/w185${crew.profile_path}`
                        : exampleCast
                    }
                    alt={crew.name}
                  />
                  <PeopleName>{crew.name}</PeopleName>
                  <PeopleRole>{crew.job}</PeopleRole>
                </PeopleTile>
              ))}
            </PeopleContainer>
          </Section>
        </>
      )}
    </>
  );
};

export default MovieDetails;
