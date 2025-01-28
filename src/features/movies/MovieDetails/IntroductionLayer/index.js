import {
    Wrapper,
    LayerContainer,
    InfoContainer,
    Title,
    RateContainer,
    Rating,
    MaxRating,
    Votes,
    StyledStarIcon
} from "./styled";



const IntroductionLayer = () => (
    <Wrapper>
        <LayerContainer>
            <InfoContainer>
                <Title>Mulan long title</Title>
                <RateContainer>
                    <Rating> <StyledStarIcon />7,8 </Rating>
                    <MaxRating>&nbsp; / 10</MaxRating>
                </RateContainer>
                <Votes>335 votes</Votes>
            </InfoContainer>
        </LayerContainer>
    </Wrapper>
);

export default IntroductionLayer;