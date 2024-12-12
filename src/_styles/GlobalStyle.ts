import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins", -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
