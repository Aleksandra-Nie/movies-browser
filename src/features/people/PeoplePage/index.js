import { useSelector } from "react-redux";
import { fetchPeople, fetchPeopleByQuery } from "../fetchPeopleData";
import { selectSearchQuery, selectTotalPages, setPeople } from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";
import Scrollbar from "../../Scrollbar";
import { Wrapper } from "../../../common/index";

const PeoplePage = () => {
    const searchQuery = useSelector(selectSearchQuery);

    return (
        <Wrapper>
            <PeopleContainer />
            {searchQuery ? (
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