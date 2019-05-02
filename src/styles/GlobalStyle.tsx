import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Rubik:400,500,700,900');

  body {
    line-height: 1.5;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }
  
  a { text-decoration: none; }
      
  a, abbr, acronym, address, applet, article, aside, audio, big, blockquote, 
  body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, 
  embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, 
  html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output,
  p, pre, q, ruby, s, samp, section, small, span, strike, sub, summary, sup, 
  table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
   }
`;
