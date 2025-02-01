import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PersonTile from "../PersonTile";
import Loader from "../../Loader";
import { StyledPeopleContainer, Header, PeopleTilesContainer } from "./styled";
import { selectLoading } from "../peopleSlice";
import searchQueryParamName from "../../searchQueryParamName";

const PeopleContainer = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search).get(searchQueryParamName);
    const loading = useSelector(selectLoading);

    return (
        <StyledPeopleContainer>
            {loading && <Loader />}
            <Header>{searchParams !== null ? `Search results for "${searchParams}"` : `Popular people`}</Header>
            <PeopleTilesContainer>
                <PersonTile />
            </PeopleTilesContainer>
        </StyledPeopleContainer>
    );
};

export default PeopleContainer;