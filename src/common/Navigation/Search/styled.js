import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../icons/Search.svg";

export const Wrapper = styled.div`
  width: 432px;
  height: 48px;
  display: flex;
  gap: 16px;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 50px;
  padding: 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertialMax}) {
    width: 100%;
    height: 44px;
    margin-top: 20px;
    padding: 0 20px;
  }

  @media (${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%:
    height: 44px;
    margin-top: 30px;
    padding: 0 20px;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertialMax}) {
    font-size: 14.5px;
    line-height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertialMax}px) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 20px;
    height: 20px;
  }
`;
