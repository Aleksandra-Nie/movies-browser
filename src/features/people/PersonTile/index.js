import { Link } from "./styled";
import { Tile, PersonName, PersonPhoto } from "../personStyles";
import personPlaceholder from "../../../images/person.png";

const PersonTile = ({ person }) => {
    return (
        <Link to={`person/${person.id}`}>
            <Tile>
                <PersonPhoto
                    src={person.profile_path ? `https://image.tmdb.org/t/p/w200${person.profile_path}` : personPlaceholder}
                    alt={person.name}
                />
                <PersonName>{person.name}</PersonName>
            </Tile>
        </Link>
    );
};

export default PersonTile;
