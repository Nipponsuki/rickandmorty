import { createGlobalStyle } from 'styled-components';
import background from 'src/assets/images/galaxy.png';

const GlobalStyle = createGlobalStyle`
  body {
		font-family: Roboto, sans-serif;
    box-sizing: border-box;
		font-size: ${props => props.theme.fontSizes.text};
		line-height: ${props => props.theme.lineHeights.text};
		font-style: normal;
		background-image: ${`url(${background})`};
		background-size: cover;
		background-position: center center;
   
  }
  *,
  *::after,
  *::before { 
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  
  a{
    color: inherit;
    text-decoration: none;
    font-family: inherit;
  }
}
`;

export default GlobalStyle;
