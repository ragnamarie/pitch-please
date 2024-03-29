import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #__next {
    margin: 0;
    height: 100vh;
    width: 100vh;

  }

  header {
padding-top: 20px;
padding-left: 30px;
    min-width: 100vw;
    border-bottom: solid green;
    height: 136px;
    background-color: white;
  } 

body {
    font-family: 'Futura', sans-serif;
    font-weight: 500;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background-color: green;

  }

  main {
    min-height: 75%;
  }

h1 {
    font-weight: bold; /* You can adjust this value as well */
    font-size: 54px;
    margin: 0;
}

h2 {
  font-weight: 700;
  color: white;
}

h3 {
  font-weight: 500;
  font-size: 16px;
  color: white;
}

ul {    
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  gap: 25px;
  padding: 0;
  padding-top: 15px;
  min-width: 100vw;
}

li {
  list-style-type: none;
}


a {
  text-decoration: none;
  color: white;
  align-self: center;
}

header a {
  color: green;
}

footer {
  bottom: 0;
  width: 100%;
  color: white;
  font-weight: 700;
  padding-left: 30px;
}

td {
padding: 20px;
}
`;
