import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

body {
    font-family: 'Futura', sans-serif;
    font-weight: 500;
    margin: 0;
    padding: 15px;
    height: 100vh;
    width: 100vw;
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
  gap: 15px;
  padding: 0;
}

li {
  list-style-type: none;
}


a {
  text-decoration: none;
  color: green;
  align-self: center;
}

footer {
  bottom: 0;
  width: 100%;
}

td {
padding: 20px;
}
`;
