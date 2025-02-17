import styled from "styled-components";
import { ReactComponent as NoResultsPhoto } from "../../images/noResults.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    align-self: flex-start;
    margin-top: 64px;
    color: ${({ theme }) => theme.color.woodsmoke};
    font-size: 36px;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        font-size: 24px;
        font-weight: 500;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 16px;
    };
`;

export const NoResultsImage = styled(NoResultsPhoto)`
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        width: 400px;
        height: 400px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        width: 300px;
        height: 300px;
    };
`;