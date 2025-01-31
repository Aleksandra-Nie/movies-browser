import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryCurrentPage } from "../../useQueryCurrentPage";
import { fetchPeopleRequest, selectPeople } from "../../people/peopleSlice";
import { Tile, PersonName, PersonPhoto } from "../personStyles";
import { Link } from "./styled";

const PersonTile = () => {
    const dispatch = useDispatch();
    const currentPage = useQueryCurrentPage();

    useEffect(() => {
        dispatch(fetchPeopleRequest({ page: currentPage }));
    }, []);

    const peopleData = useSelector(selectPeople);
    const people = peopleData.results || [];

    return (
        <>
            {people.map(person => (
                <Link
                    to={`person/${person.id}`}
                    key={person.id}
                >
                    <Tile>
                        <PersonPhoto src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} />
                        <PersonName>{person.name}</PersonName>
                    </Tile>
                </Link>
            ))}
        </>
    );
};

export default PersonTile;