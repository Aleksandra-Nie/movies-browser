import styled from "styled-components";

export const Background = styled.div`
  background: ${({ theme }) => theme.color.black};
`;

export const MainWrapper = styled.div`
  max-width: 1368px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 16px 23px 16px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    flex-direction: column;
    padding: 32px 16px 16px 16px; 
    gap: 24px;  
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax}px) {
    font-size: 14.5px;
    line-height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVericalMax}px) {
    max-width: 100%;
    font-size: 14.5px;
    line-height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 288px;
    font-size: 14.5px;
    line-height: 20px;
  }
`;
