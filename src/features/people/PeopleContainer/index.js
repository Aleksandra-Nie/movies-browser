import PersonTile from "../PersonTile";
import { StyledPeopleContainer, Header, PeopleTilesContainer } from "./styled";

const PeopleContainer = () => (
    <StyledPeopleContainer>
        <Header>Popular people</Header>
        <PeopleTilesContainer>
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
        </PeopleTilesContainer>
    </StyledPeopleContainer>
);

export default PeopleContainer;