import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-font-smoothing: antialiased;
        font-family: 'Open Sans', sans-serif;
        color: #1c1b58;
    }

    .MuiButton-containedPrimary {
        background-color: #837cf4 !important;
    }
`;
