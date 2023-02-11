import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({ theme }) => theme.Colors.BackGroundColor};
    color: ${({ theme }) => theme.Colors.White};
    font-family: ${({ theme }) => theme.Fonts.MainTextFont};


    -webkit-font-smoothing: antialiased;
  }

  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover, a:hover {
    filter: brightness(.9);
  }
`;
