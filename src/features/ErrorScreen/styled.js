import styled from "styled-components";
import { ReactComponent as Danger } from "../../images/danger.svg";

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    color: ${({ theme }) => theme.color.woodsmoke};
    text-align: center;
    margin-top: 180px;
`;

export const ErrorIcon = styled(Danger)`

`;

export const ErrorTitle = styled.h2`
    font-size: 36px;
    font-weight: 600;
    margin: 0;
`;

export const ErrorText = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 0;
`;

export const HomeButton = styled.button`
    padding: 16px 24px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.scienceBlue};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    transition: transform 0.5s;

    &:hover{
        cursor: pointer;
        opacity: 90%;
        transform: scale(1.03);
    };
`;