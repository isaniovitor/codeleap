import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    //border: 1px solid red !important;
}
  * {
    //color: #fff;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: roboto, sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    //width: 100vw;
    background-color: #DDDDDD;
  }
  ol, ul {
    padding: 0;
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  p{
    margin: 0;
  }
`;