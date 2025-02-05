import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchPeople, fetchPeopleByQuery } from "../fetchPeopleData";
import { selectPeople, selectTotalPages, setPeople } from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";
import Scrollbar from "../../Scrollbar";
import NoResults from "../../NoResults";
import { Wrapper } from "../../../common/index";
import searchQueryParamName from "../../searchQueryParamName";

const PeoplePage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search).get(searchQueryParamName);
    const peopleData = useSelector(selectPeople);
    const people = peopleData.results;

    if (!searchParams) {
        return (
            <Wrapper>
                <PeopleContainer />
                <Scrollbar
                    fetchData={fetchPeople}
                    setData={setPeople}
                    selectTotalPages={selectTotalPages}
                />
            </Wrapper>
        );
    }

    if (Array.isArray(people) && people.length === 0) {
        return (<NoResults />)
    }

    return (
        <Wrapper>
            <PeopleContainer />
            {searchParams ? (
                <Scrollbar
                    fetchData={fetchPeopleByQuery}
                    setData={setPeople}
                    selectTotalPages={selectTotalPages}
                />
            ) : (
                <Scrollbar
                    fetchData={fetchPeople}
                    setData={setPeople}
                    selectTotalPages={selectTotalPages}
                />
            )}
        </Wrapper>
    );
};

export default PeoplePage;