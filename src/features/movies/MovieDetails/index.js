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
    PeopleRole
} from "./styled";
import exampleMoviePoster from "../../../images/exampleMoviePoster.png";
import exampleCast from "../../../images/exampleCast.png";

const MovieDetails = () => (
    <Wrapper>
        <MovieTile>
            <Poster src={exampleMoviePoster} alt="movie poster" />
            <MovieSection>
                <Header>Mulan</Header>
                <Year>2020</Year>
                <DetailsContainer>
                    <LineContainer>
                        <Caption>Production:</Caption>
                        <Text>China, United States of America</Text>
                    </LineContainer>
                    <LineContainer>
                        <Caption>Release date:</Caption>
                        <Text>24.10.2020</Text>
                    </LineContainer>
                </DetailsContainer>
                <GenresList>
                    <Genres>Action</Genres>
                    <Genres>Adventure</Genres>
                    <Genres>Drama</Genres>
                </GenresList>
                <MovieRating>
                    <StyledStarIcon />
                    <Rating>7,8</Rating>
                    <MaxRating>/ 10</MaxRating>
                    <Votes>335 votes</Votes>
                </MovieRating>
            </MovieSection>
            <Description>A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.</Description>
        </MovieTile>
        <Section>
            <Title>Cast</Title>
            <PeopleContainer>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
            </PeopleContainer>
        </Section>
        <Section>
            <Title>Crew</Title>
            <PeopleContainer>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
                <PeopleTile>
                    <Image src={exampleCast} alt="cast" />
                    <PeopleName>Liu Yifei</PeopleName>
                    <PeopleRole>Mulan</PeopleRole>
                </PeopleTile>
            </PeopleContainer>
        </Section>
    </Wrapper>
);

export default MovieDetails;