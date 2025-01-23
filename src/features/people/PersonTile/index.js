import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleRequest, selectPeople } from "../../people/peopleSlice";
import { Tile, PersonPhoto, PersonName } from "./styled";

const PersonTile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeopleRequest());
    }, []);

    const peopleData = useSelector(selectPeople);
    const people = peopleData.results || [];

    return (
        <>
            {people.map(person => (
                <Tile>
                    <PersonPhoto src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} />
                    <PersonName>{person.name}</PersonName>
                </Tile>
            ))}
        </>
    );
};

export default PersonTile;