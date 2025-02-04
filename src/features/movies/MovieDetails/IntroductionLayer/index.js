import {
  Wrapper,
  LayerContainer,
  InfoContainer,
  Title,
  RateContainer,
  Rating,
  MaxRating,
  Votes,
  StyledStarIcon,
} from "./styled";

const IntroductionLayer = ({ title, rating, votes, backdropPath }) => (
  <Wrapper>
    <LayerContainer src={`https://image.tmdb.org/t/p/original${backdropPath}`}>
      <InfoContainer>
        <Title>{title}</Title>
        <RateContainer>
          <Rating>
            <StyledStarIcon />
            {rating ? rating.toFixed(1) : "N/A"}
          </Rating>
          <MaxRating>&nbsp;/ 10</MaxRating>
        </RateContainer>
        <Votes>{votes} votes</Votes>
      </InfoContainer>
    </LayerContainer>
  </Wrapper>
);

export default IntroductionLayer;
