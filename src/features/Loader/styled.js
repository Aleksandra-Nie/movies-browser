import styled, { keyframes } from "styled-components";

export const Title = styled.p`
    font-size: 36px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke};
    margin: 56px 0 120px 0;
`;

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
`;

