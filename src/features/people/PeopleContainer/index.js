import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useQueryCurrentPage } from "../../useQueryCurrentPage";
import {
    fetchPeopleByQueryRequest,
    fetchPeopleRequest,
    selectPeople,
    selectLoading,
} from "../peopleSlice";
import Loader from "../../Loader";
import NoResults from "../../NoResults";
import { PeopleTilesContainer } from "./styled";
import { Header } from "../../sharedStyles";
import searchQueryParamName from "../../searchQueryParamName";
import PersonTile from "../PersonTile";
import { FadeInWrapper } from "../../../common/index";

const PeopleContainer = () => {
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
    }, [query, currentPage, dispatch]);

    const peopleData = useSelector(selectPeople);
    const people = peopleData?.results || [];
    const loading = useSelector(selectLoading);

    const resultCount = query && peopleData ? peopleData.total_results : people.length;

    return (
        <FadeInWrapper>
            {!loading && (query ? (people.length > 0 && <Header>Search results for "{query}" ({resultCount})</Header>) : <Header>Popular people</Header>)}

            {loading ? (
                <>
                    {query && <Header>Search results for "{query}"</Header>}
                    <Loader />
                </>
            ) : people.length === 0 && query ? (
                <NoResults />
            ) : (
                <PeopleTilesContainer>
                    {people.map((person) => (
                        <PersonTile key={person.id} person={person} />
                    ))}
                </PeopleTilesContainer>
            )}
        </FadeInWrapper >
    );
};

export default PeopleContainer;
