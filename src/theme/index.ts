import { createGlobalStyle, keyframes } from 'styled-components';

// fonts
import formularRegularFont from '../assets/fonts/formular-regular.otf';
import formularMediumFont from '../assets/fonts/formular-medium.otf';
import formularBoldFont from '../assets/fonts/formular-bold.otf';

export interface Theme {
  font: {
    primary: string;
  }
  color: {
    background: {
      body: string;
      bottomMenu: string;
      bottomMenuItem: string;
      loadingLogo: string;
      buttonPrimary: string;
      input: string;
      info: string;
      error: string;
      success: string;
      warning: string;
    },
    text: {
      body: string;
      bottomMenuItem: string;
      bottomMenuItemActive: string;
      loadingLogo: string;
      buttonPrimary: string;
      input: string;
      info: string;
      error: string;
      success: string;
      warning: string;
    },
    border: {
      input: string;
      bottomMenuItemBottomActive: string;
    }
  }
}

export const defaultTheme: Theme = {
  font: {
    primary: 'Formular, serif',
  },
  color: {
    background: {
      body: '#101010',
      bottomMenu: 'rgba(50,50,66,0.7)',
      bottomMenuItem: '#444d55',
      loadingLogo: '#fff',
      buttonPrimary: '#D9D9D9',
      input: '#fff',
      info: '#BEF',
      error: '#D8000C',
      success: '#DFF2BF',
      warning: '#FEEFB3',
    },
    text: {
      body: '#fff',
      bottomMenuItem: '#fff',
      bottomMenuItemActive: '#444d55',
      loadingLogo: '#997cfa',
      buttonPrimary: '#1D1D1D',
      input: '#000',
      info: '#059',
      error: '#FFBABA',
      success: '#270',
      warning: '#9F6000',
    },
    border: {
      input: '#000',
      bottomMenuItemBottomActive: '#fff',
    }
  },
};

const skeleton = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
      background-color: hsl(200, 20%, 95%);
  }
`;


const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
`;

export const animation = {
  skeleton,
  pulse,
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Formular;
    font-weight: 400;
    src: url(${formularRegularFont}) format("opentype");
  }

  @font-face {
    font-family: Formular;
    font-weight: 500;
    src: url(${formularMediumFont}) format("opentype");
  }

  @font-face {
    font-family: Formular;
    font-weight: 700;
    src: url(${formularBoldFont}) format("opentype");
  }

  body {
    font-family: ${({ theme }) => theme.font.primary};
    background: ${({ theme }) => theme.color.background.body};
    color: ${({ theme }) => theme.color.text.body};
  }
  
  input, textarea, button, select {
    font-family: ${({ theme }) => theme.font.primary};
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

