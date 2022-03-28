import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: ${({ theme }) => theme.white};
        --white-100: ${({ theme }) => theme.white_100};
        --white-200: ${({ theme }) => theme.white_200};
        --white-300: ${({ theme }) => theme.white_300};
        --gray-100: ${({ theme }) => theme.gray_100};
        --gray-200: ${({ theme }) => theme.gray_200};
        --gray: ${({ theme }) => theme.gray};
        --purple: ${({ theme }) => theme.purple};
        --pink: ${({ theme }) => theme.pink};
        --red: ${({ theme }) => theme.red};
    }

    * {
        /* transition: 0.4s; */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--white);
        color: var(--gray);
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto', sans-serif;
    }
`;
