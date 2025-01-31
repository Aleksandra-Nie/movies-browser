import { fetchPeople } from "../fetchPeopleData";
import { selectTotalPages, setPeople } from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";
import Scrollbar from "../../Scrollbar";
import { Wrapper } from "../../../common/index";

const PeoplePage = () => (
    <Wrapper>
        <PeopleContainer />
        <Scrollbar
            fetchData={fetchPeople}
            setData={setPeople}
            selectTotalPages={selectTotalPages}
        />
    </Wrapper>
);

export default PeoplePage;