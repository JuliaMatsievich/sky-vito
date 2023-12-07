import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	
@font-face {
	font-family: 'Roboto';
  src: local('Roboto'),
    url('./fonts/Roboto/Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

*:before,
*:after {
	box-sizing: border-box;
}
 
ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  color: #000;
}

button {
	cursor: pointer
}
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #fff;
`;
