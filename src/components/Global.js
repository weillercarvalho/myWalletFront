import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        box-sizing: border-box;
        --color-background: #8c11be;
        --color-positive-green: #03AC00;
        --color-negative-red: #C70000;
        --color-placeholder: #000000;
        --color-letters: #ffffff;
        --color-button: #a328d6;
    }

    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Raleway', sans-serif;
        background-color: var(--color-background);
    }

    @media (max-width: 375px) {
        width: 100%;
        height: 100%;
    }
`;

export { Global };
