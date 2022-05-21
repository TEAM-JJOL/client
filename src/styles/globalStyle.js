import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  #root, body, html {
    width: 375px;
    height: 100%;
    margin: 0 auto;

    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    ::-webkit-scrollbar{ display:none; }
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
	}

  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
