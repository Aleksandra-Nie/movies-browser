import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchQueryParamName from "../../../features/searchQueryParamName";
import { Wrapper, SearchInput, StyledSearchIcon } from "./styled";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const [searchQuery, setSearchQuery] = useState(query || "");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    if (!query) {
      setSearchQuery("");
    }
  }, [query]);

  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeoutId = setTimeout(() => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("page", 1);

      if (searchQuery.trim() === "") {
        searchParams.delete(searchQueryParamName);
      } else {
        searchParams.set(searchQueryParamName, searchQuery);
      }

      if (location.pathname.includes("/movies")) {
        navigate(`/movies?${searchParams.toString()}`);
      } else if (location.pathname.includes("/people/person")) {
        navigate(`/people?${searchParams.toString()}`);
      } else {
        navigate(`${location.pathname}?${searchParams.toString()}`);
      }
    }, 500);

    setDebounceTimeout(timeoutId);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const onInputChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  const getPlaceholder = () => {
    if (location.pathname.includes("/movies")) {
      return "Search for movies...";
    } else if (location.pathname.includes("/people")) {
      return "Search for people...";
    } else {
      return "Search...";
    }
  };

  return (
    <Wrapper>
      <StyledSearchIcon />
      <SearchInput
        type="text"
        placeholder={getPlaceholder()}
        value={searchQuery || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;
