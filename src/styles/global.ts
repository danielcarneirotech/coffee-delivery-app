import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

body {
    background-color: ${(props) => props.theme["background"]};
}

h1 {
    font-family: "Baloo 2", sans-serif;
    line-height: 130%;
    font-weight: 800;
}

p {
    font-family: "Roboto", sans-serif;
}

svg {
    background: transparent;
}
`;
