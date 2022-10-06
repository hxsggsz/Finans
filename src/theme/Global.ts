import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   body {
      background: #f5f5f5;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   }

   a {
      list-style: none;
      text-decoration: none;
   }
`;