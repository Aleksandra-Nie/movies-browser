import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchPeopleRequest, selectPeople } from "../../people/peopleSlice";
import { Tile, PersonName, PersonPhoto } from "../personStyles";
import { Link } from "./styled";

const PersonTile = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get("page")) || 1;

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