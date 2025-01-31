import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../icons/Search.svg";

export const Wrapper = styled.div`
  max-width: 432px;
  width: 100%;
  height: 48px;
  display: flex;
  gap: 16px;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 50px;
  padding-left: 24px;
 
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    max-width: 100%;
    height: 44px;
    padding: 0 20px;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 33px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  outline: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertialMax}px) {
    font-size: 14.5px;
    line-height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 288px;
    font-size: 13px;
    line-height: 17px;
    margin-top: 24px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertialMax}px) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 20px;
    height: 20px;
  }
`;
