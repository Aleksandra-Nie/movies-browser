import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        font-family: "Poppins", sans-serif;
        margin: 0 auto;
        height: 100vh; 
        background-color: ${({ theme }) => theme.color.whisper};
}
`;
