import styled, { css } from "styled-components";
import { ReactComponent as scrollbarVector } from "../../images/scrollbarVector.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 40px 0px 100px;
    padding-bottom: 100px;
    ${({ loading }) => loading && `display: none;`};
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        gap: 8px;
    };
`;

export const Vector = styled(scrollbarVector)`
    box-sizing: content-box;
    transform: translateY(0.8px);
    width: 7px;
    height: 11px;
    padding-right: 6px;
    color: ${({ theme }) => theme.color.scienceBlue};
    
    ${({ $rightVector }) => $rightVector && css`
        width: 7px;
        height: 11px;
        transform: rotate(180deg) translateY(-0.8px);
    `};

    ${({ $buttonDisabled }) => $buttonDisabled && css`
        color: ${({ theme }) => theme.color.waterloo};
    `};

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        width: 5px;
        height: 8px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        padding: 0 2px;
    };
`;

export const Button = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.pattensBlue};
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 14px;

    &:hover{
        cursor: pointer;
        opacity: 85%;
    };

    &:disabled{
        cursor: not-allowed;
        opacity: 60%;
        background: ${({ theme }) => theme.color.mystic};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        font-size: 10px;
        padding: 8px 12px;
    };
`;

export const PageCounter = styled.p`
    color: ${({ theme }) => theme.color.lynch};
    margin: 0 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        margin: 0;
        font-size: 10px;
    };
`;

export const PageNumber = styled.span`
    color: ${({ theme }) => theme.color.woodsmoke};
    font-weight: 600;
`;