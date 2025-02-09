import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledPeopleContainer = styled.div`
    margin-top: 56px;
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const Header = styled.h2`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.color.woodsmoke};

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        font-size: 20px;
        margin-bottom: 12px;
    };
`;

export const PeopleTilesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}px){
        grid-template-columns: repeat(5, 1fr);
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMedium}px){
        grid-template-columns: repeat(4, 1fr);
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        gap: 14px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px){
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    };
`;
