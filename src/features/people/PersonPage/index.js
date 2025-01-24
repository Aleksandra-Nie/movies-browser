
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPersonById, selectPeople } from "../peopleSlice";
import { Wrapper } from "../../../common/index";
import { Tile, PersonName, PersonPhoto } from "../PersonTile/styled";
import { BirthInfo, BirthLabel, BirthData, PersonProfile, PersonInformation } from "./styled";

const PersonPage = () => {
    const { id } = useParams();
    const person = useSelector(state => getPersonById(state, id));

    return (
        <Wrapper>
            <Tile $personDetails>
                <PersonPhoto
                    $personDetails
                    src={`https://image.tmdb.org/t/p/w400${person.profile_path}`}
                />
                <PersonInformation>
                    <PersonName $personDetails>{person.name}</PersonName>
                    <BirthInfo>
                        <BirthLabel>Date of birth:<BirthData>25.08.1987</BirthData></BirthLabel>
                        <BirthLabel>Place of birth:<BirthData>Wuhan, Hubei, China</BirthData></BirthLabel>
                    </BirthInfo>
                    <PersonProfile>Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</PersonProfile>
                </PersonInformation>
            </Tile>
        </Wrapper>
    );
};

export default PersonPage;