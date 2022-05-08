import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
        font-size: calc(60% + 0.8vmin);
    }

    :root {
        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;

        --link: #5d80d6;
    }
`;