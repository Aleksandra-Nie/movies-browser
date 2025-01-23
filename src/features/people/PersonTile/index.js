import { Tile, PersonPhoto, PersonName } from "./styled";
import personPhoto from "../../../images/personPhoto.png";

const PersonTile = () => (
    <Tile>
        <PersonPhoto src={personPhoto} />
        <PersonName>Jason Scott Lee Long name</PersonName>
    </Tile>
);

export default PersonTile;