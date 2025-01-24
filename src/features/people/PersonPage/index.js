
import personPhoto from "../../../images/personPhoto.png";
import { Wrapper } from "../../../common/index";
import { Tile, PersonName, PersonPhoto } from "../PersonTile/styled";
import { BirthInfo, BirthLabel, BirthData, PersonProfile, PersonInformation } from "./styled";

const PersonPage = () => (
    <Wrapper>
        <Tile $personDetails>
            <PersonPhoto
                $personDetails
                src={personPhoto}
            />
            <PersonInformation>
                <PersonName $personDetails>Liu Yifei</PersonName>
                <BirthInfo>
                    <BirthLabel>Date of birth:<BirthData>25.08.1987</BirthData></BirthLabel>
                    <BirthLabel>Place of birth:<BirthData>Wuhan, Hubei, China</BirthData></BirthLabel>
                </BirthInfo>
                <PersonProfile>Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</PersonProfile>
            </PersonInformation>
        </Tile>
    </Wrapper>
);

export default PersonPage;