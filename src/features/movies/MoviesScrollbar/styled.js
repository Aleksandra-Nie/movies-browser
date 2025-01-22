import styled, { css } from "styled-components";
import { ReactComponent as scrollbarVector } from "../../../images/scrollbarVector.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 40px 0 100px 0;
`;

export const Vector = styled(scrollbarVector)`
    transform: translateY(0.5px);
    width: 7px;
    height: 11px;
    padding-right: 6px;
    color: ${({ theme }) => theme.color.waterloo};
    
    ${({ $blueVector }) => $blueVector && css`
        width: 7px;
        height: 11px;
        transform: rotate(180deg) translateY(-0.5px);
        color: ${({ theme }) => theme.color.scienceBlue};
    `};
`;

export const Button = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 14px;

    ${({ $blueButton }) => $blueButton && css`
        background: ${({ theme }) => theme.color.pattensBlue};
    `};

    &:hover{
        cursor: pointer;
        opacity: 85%;
    };
`;

export const PageCounter = styled.p`
    margin: 0 12px;
`;