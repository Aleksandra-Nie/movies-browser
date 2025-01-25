import React from "react";
import { Wrapper, SearchInput, StyledSearchIcon } from "./styled";

const Search = () => {
  return (
    <Wrapper>
      <StyledSearchIcon />
      <SearchInput type="text" placeholder="Search for movies..." />
    </Wrapper>
  );
};

export default Search;
