import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter as RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context';
import { LayoutProvider } from './components';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <ThemeProvider>
    <LayoutProvider>
      <RouterProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RouterProvider>
    </LayoutProvider>
  </ThemeProvider>
);
// const main = () => {
//   if (rootElement.hasChildNodes()) {
//     hydrate(Root, rootElement);
//   } else {
//     render(Root, rootElement);
//   }
// };
