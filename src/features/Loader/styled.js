import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    };

    to {
        transform: rotate(360deg);
    };
`;

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledLoader = styled.span`
    width: 91px;
    height: 91px;
    border: 12px solid ${({ theme }) => theme.color.snuff};
    border-bottom-color: ${({ theme }) => theme.color.black};
    border-radius: 50%;
    animation: ${rotation} 1s linear infinite;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
        width: 55px;
        height: 55px;
        border: 8px solid ${({ theme }) => theme.color.snuff};
        border-bottom-color: ${({ theme }) => theme.color.black};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        width: 35px;
        height: 35px;
        border: 5px solid ${({ theme }) => theme.color.snuff};
        border-bottom-color: ${({ theme }) => theme.color.black};
    };
`;

