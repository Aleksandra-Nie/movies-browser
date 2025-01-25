import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../icons/Search.svg"; // Poprawiony import

export const Wrapper = styled.div`
  width: 500px;
  height: 48px;
  display: flex;
  gap: 16px;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 50px;
  padding: 0 24px;
  margin-left: auto;

  @media (max-width: 1086px) {
    width: 100%;
    height: 46px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;

  @media (max-width: 1086px) {
    font-size: 14.5px;
    line-height: 20px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: 1086px) {
    width: 23px;
    height: 23px;
  }

  @media (max-width: 767px) {
    width: 22px;
    height: 22px;
  }
`;
