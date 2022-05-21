import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  #root, body, html {
    width: 375px;
    height: 100%;
    margin: 0 auto;

    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    ::-webkit-scrollbar{ display:none; }
	}

  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
