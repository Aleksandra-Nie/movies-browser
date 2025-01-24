import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
    display: flex;
    text-decoration: none;
`;

export const Tile = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.woodsmoke};
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.softBlue};

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        padding: 8px;
    };

    ${({ $personDetails }) => $personDetails && css`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 40px;
        padding: 40px;
    `};
`;

export const PersonPhoto = styled.img`
    border-radius: 5px;
    width: 100%;
    height: auto;

    ${({ $personDetails }) => $personDetails && css`
        width: 399px;
        height: 564px;
    `};
`;

export const PersonName = styled.p`
    text-align: center;
    margin: 12px 0;
    font-size: 22px;
    font-weight: 500;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        font-size: 14px;
        margin: 8px 0 16px 0;
    };

    ${({ $personDetails }) => $personDetails && css`
        color: ${({ theme }) => theme.color.black};
        font-size: 36px;
        font-weight: 600;
        margin: 6px 0 0 0;
    `};
`;