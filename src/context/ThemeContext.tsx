import React from 'react';
import emotionReset from 'emotion-reset';
import { ThemeProvider as EmotionProvider, Global, css } from '@emotion/react';

import '@emotion/react';

export type ThemeType = {
  colors: {
    neutral: {
      BLACK: string;
      DARK_GREY: string;
      GREY: string;
      LIGHT_GREY: string;
      GREY_BLUE: string;
      LIGHT_GREY_BLUE: string;
      SILVER: string;
      WHITE: string;
    };
    primary: {
      DARK_BLUE: string;
      NAVY: string;
      MEDIUM_BLUE: string;
      AZURE: string;
      SKY: string;
      LIGHT_BLUE: string;
    };
    danger: {
      DARK_RED: string;
      SCARLET: string;
      MEDIUM_RED: string;
      RASPBERRY: string;
      RUBICUND: string;
      LIGHT_RED: string;
    };
    accent: string;
    warning: string;
    background: string;
  };
  dimensions: {};
};

const theme: ThemeType = {
  colors: {
    neutral: {
      BLACK: '#212121',
      DARK_GREY: '#4D4D4D',
      GREY: '#717171',
      LIGHT_GREY: '#89939E',
      GREY_BLUE: '#ABBED1',
      LIGHT_GREY_BLUE: '#D8DFE7',
      SILVER: '#F5F7FA',
      WHITE: '#FFFFFF',
    },
    primary: {
      DARK_BLUE: '#0053AD',
      NAVY: '#0663c7',
      MEDIUM_BLUE: '#0671E0',
      AZURE: '#4196F0',
      SKY: '#DBEDFF',
      LIGHT_BLUE: '#EEF5FC',
    },
    danger: {
      DARK_RED: '#C33025',
      SCARLET: '#E01507',
      MEDIUM_RED: '#CE02B1D',
      RASPBERRY: '#FF5A4F',
      RUBICUND: '#F0857D',
      LIGHT_RED: '#FFF1F0',
    },
    accent: '#000000',
    warning: 'red',
    background: '#F5F7FA',
  },
  dimensions: {},
};
declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props): React.ReactElement => {
  return (
    <EmotionProvider theme={theme}>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        `}
      />
      {children}
    </EmotionProvider>
  );
};
