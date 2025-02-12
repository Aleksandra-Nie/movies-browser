import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PersonTile from "../PersonTile";
import Loader from "../../Loader";
import { StyledPeopleContainer, Header, PeopleTilesContainer } from "./styled";
import { selectPeople, selectLoading } from "../peopleSlice";
import searchQueryParamName from "../../searchQueryParamName";

const PeopleContainer = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search).get(searchQueryParamName);
    const peopleData = useSelector(selectPeople);
    const people = peopleData?.results;
    const loading = useSelector(selectLoading);

    const resultCount = people ? people.length : 0;

    return (
        <StyledPeopleContainer>
            {loading && <Loader />}
            <Header>
                {searchParams
                    ? `Search results for "${searchParams}" (${resultCount})`
                    : `Popular people`}
            </Header>
            <PeopleTilesContainer>
                <PersonTile />
            </PeopleTilesContainer>
        </StyledPeopleContainer>
    );
};

export default PeopleContainer;

