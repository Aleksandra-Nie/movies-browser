import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchPeople, fetchPeopleByQuery } from "../fetchPeopleData";
import {
    selectPeople,
    selectTotalPages,
    setPeople,
    setTotalPages
} from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";
import Scrollbar from "../../Scrollbar";
import searchQueryParamName from "../../searchQueryParamName";
import Loader from "../../Loader";
import ErrorScreen from "../../ErrorScreen";
import { Header } from "../../sharedStyles";
import { FadeInWrapper } from "../../../common/index";

const PeoplePage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search).get(searchQueryParamName);

    const peopleData = useSelector(selectPeople) || {};
    const people = peopleData.results || [];

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [contentReady, setContentReady] = useState(false);

    const loadData = async (fetchFunction) => {
        try {
            setLoading(true);
            setError(false);
            await fetchFunction();
        } catch (err) {
            console.error("Error loading people", err);
            setError(true);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    useEffect(() => {
        if (!searchParams) {
            dispatch(setTotalPages(500));
            loadData(fetchPeople);
        } else {
            loadData(() => fetchPeopleByQuery(searchParams));
        }
    }, [searchParams, dispatch]);

    useEffect(() => {
        if (!loading && !error) {
            setTimeout(() => {
                setContentReady(true);
            }, 50);
        } else {
            setContentReady(false);
        }
    }, [loading, error]);

    if (error) {
        return <ErrorScreen />;
    }

    return (
        <>
            {loading ? (
                <FadeInWrapper>
                    {searchParams && <Header>Search results for "{searchParams}"</Header>}
                    <Loader />
                </FadeInWrapper>
            ) : (
                <>
                    <PeopleContainer />
                    {contentReady && people.length > 0 && (
                        <Scrollbar
                            fetchData={searchParams ? fetchPeopleByQuery : fetchPeople}
                            setData={setPeople}
                            selectTotalPages={selectTotalPages}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default PeoplePage;
