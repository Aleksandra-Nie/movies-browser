import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQueryCurrentPage } from "../../useQueryCurrentPage";
import searchQueryParamName from "../../searchQueryParamName";
import { fetchPeopleByQueryRequest, fetchPeopleRequest, selectPeople } from "../../people/peopleSlice";
import { Tile, PersonName, PersonPhoto } from "../personStyles";
import { Link } from "./styled";
import personPlaceholder from "../../../images/person.png";

const PersonTile = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const currentPage = useQueryCurrentPage();

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    useEffect(() => {
        if (!query) {
            dispatch(fetchPeopleRequest({ page: currentPage }));
        } else {
            dispatch(fetchPeopleByQueryRequest(query, { page: currentPage }));
        }
    }, [query, currentPage]);

    const peopleData = useSelector(selectPeople)?.results;
    const people = peopleData || [];

    return (
        <>
            {people.map(person => (
                <Link
                    to={`person/${person.id}`}
                    key={person.id}
                >
                    <Tile>
                        <PersonPhoto src={person.profile_path ? `https://image.tmdb.org/t/p/w200${person.profile_path}` : personPlaceholder}
                            alt={person.name}
                        />
                        <PersonName>{person.name}</PersonName>
                    </Tile>
                </Link>
            ))}
        </>
    );
};

export default PersonTile;