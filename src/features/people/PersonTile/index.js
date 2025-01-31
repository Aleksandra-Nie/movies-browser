import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQueryCurrentPage } from "../../useQueryCurrentPage";
import { fetchPeopleByQueryRequest, fetchPeopleRequest, selectPeopleByQuery } from "../../people/peopleSlice";
import { Tile, PersonName, PersonPhoto } from "../personStyles";
import { Link } from "./styled";

const PersonTile = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const currentPage = useQueryCurrentPage();

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search");

    useEffect(() => {
        if (!query) {
            dispatch(fetchPeopleRequest({ page: currentPage }));
        } else {
            dispatch(fetchPeopleByQueryRequest(query));
        }
    }, [query]);

    const peopleData = useSelector(state => selectPeopleByQuery(state, query));
    const people = peopleData || [];

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