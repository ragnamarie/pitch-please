import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 2;
    font-family: 'Futura', sans-serif;
    font-weight: 500;
  }

  h1 {
    font-weight: bold; /* You can adjust this value as well */
    font-size: 54px;
    margin: 0;
}

h2 {
  font-weight: 700; /* You can adjust this value as well */
}

ul {    
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  gap: 30px;
  padding: 0;
}

li {
  list-style-type: none;
}
`;
