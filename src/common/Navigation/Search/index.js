import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { resetSearchQuery } from "../../../features/people/peopleSlice";
import searchQueryParamName from "../../../features/searchQueryParamName";
import { Wrapper, SearchInput, StyledSearchIcon } from "./styled";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const [searchQuery, setSearchQuery] = useState(query || "");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    if (!query) {
      setSearchQuery("");
      dispatch(resetSearchQuery());
    }
  }, [query]);

  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeoutId = setTimeout(() => {
      const searchParams = new URLSearchParams(location.search);

      if (searchQuery.trim() === "") {
        searchParams.delete(searchQueryParamName);
      } else {
        searchParams.set(searchQueryParamName, searchQuery);
      }

      navigate(`${location.pathname}?${searchParams.toString()}`);
    }, 500);

    setDebounceTimeout(timeoutId);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const onInputChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  return (
    <Wrapper>
      <StyledSearchIcon />
      <SearchInput
        type="text"
        placeholder="Search for people..."
        value={searchQuery || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;
