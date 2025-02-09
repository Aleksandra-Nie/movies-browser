import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchPeople, fetchPeopleByQuery } from "../fetchPeopleData";
import { selectPeople, selectTotalPages, setPeople } from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";
import Scrollbar from "../../Scrollbar";
import NoResults from "../../NoResults";
import { Wrapper } from "../../../common/index";
import searchQueryParamName from "../../searchQueryParamName";
import Loader from "../../Loader";
import ErrorScreen from "../../ErrorScreen";

const PeoplePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search).get(searchQueryParamName);
    const peopleData = useSelector(selectPeople);
    const people = peopleData.results;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadData = async (fetchFunction) => {
        try {
            setLoading(true);
            setError(false);
            await fetchFunction();
        } catch (err) {
            console.error("Error loading data", err);
            setError(true);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    useEffect(() => {
        if (!searchParams) {
            loadData(fetchPeople);
        } else {
            loadData(fetchPeopleByQuery);
        }
    }, [searchParams]);

    useEffect(() => {
        if (!searchParams) {
            navigate(location.pathname, { replace: true });
        }
    }, [searchParams, navigate, location.pathname]);

    if (loading) {
        return <Loader />;
    } else if (error) {
        return <ErrorScreen />;
    } else if (Array.isArray(people) && people.length === 0 && searchParams) {
        return <NoResults />;
    }

    return (
        <Wrapper>
            <PeopleContainer />
            <Scrollbar
                fetchData={searchParams ? fetchPeopleByQuery : fetchPeople}
                setData={setPeople}
                selectTotalPages={selectTotalPages}
            />
        </Wrapper>
    );
};

export default PeoplePage;
