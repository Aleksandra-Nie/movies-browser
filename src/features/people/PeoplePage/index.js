import { fetchPeople, fetchPeopleByQuery } from "../fetchPeopleData";
import { selectTotalPages, setPeople } from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";
import Scrollbar from "../../Scrollbar";
import { Wrapper } from "../../../common/index";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../searchQueryParamName";

const PeoplePage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search).get(searchQueryParamName);

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