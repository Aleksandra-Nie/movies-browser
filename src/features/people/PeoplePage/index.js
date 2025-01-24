import { fetchPeople } from "../fetchPeopleData";
import { selectCurrentPage, selectTotalPages, setCurrentPage, setPeople } from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";
import Scrollbar from "../../Scrollbar";
import { Wrapper } from "../../../common/index";

const PeoplePage = () => (
    <Wrapper>
        <PeopleContainer />
        <Scrollbar
            fetchData={fetchPeople}
            setData={setPeople}
            setCurrentPage={setCurrentPage}
            selectCurrentPage={selectCurrentPage}
            selectTotalPages={selectTotalPages}
        />
    </Wrapper>
);

export default PeoplePage;