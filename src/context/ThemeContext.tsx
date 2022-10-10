import React from 'react';
import emotionReset from 'emotion-reset';
import { ThemeProvider as EmotionProvider, Global, css } from '@emotion/react';

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props): React.ReactElement => {
  const theme = {};
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
