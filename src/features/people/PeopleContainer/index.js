import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PersonTile from "../PersonTile";
import Loader from "../../Loader";
import { StyledPeopleContainer, Header, PeopleTilesContainer } from "./styled";
import {
  selectPeople,
  selectLoading,
  selectTotalResults,
} from "../peopleSlice";
import searchQueryParamName from "../../searchQueryParamName";

const PeopleContainer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get(
    searchQueryParamName
  );
  const peopleData = useSelector(selectPeople);
  const people = peopleData?.results || [];
  const loading = useSelector(selectLoading);
  const totalResults = useSelector(selectTotalResults);

  return (
    <StyledPeopleContainer>
      {loading && <Loader />}
      <Header>
        {searchParams
          ? `Search results for "${searchParams}" (${totalResults})`
          : `Popular people`}
      </Header>
      <PeopleTilesContainer>
        {people.map((person) => (
          <PersonTile key={person.id} {...person} />
        ))}
      </PeopleTilesContainer>
    </StyledPeopleContainer>
  );
};

export default PeopleContainer;
