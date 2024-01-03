import styled, { createGlobalStyle } from 'styled-components';
import { $mainFont, $mainFontColor } from './variables';

export const GlobalStyle = createGlobalStyle`
	
@font-face {
	font-family: 'Roboto';
  src: local('Roboto'),
    url('./fonts/Roboto/Roboto-Regular.ttf') format('ttf');
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
  font-family: ${$mainFont};
  color: ${$mainFontColor};
}

button {
	cursor: pointer
}

textarea {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
}
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #fff;
`;
