import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   body {
      background: #D8F8D8;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   }

   a {
      list-style: none;
      text-decoration: none;
   }
`;