import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter as RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context';
import { LayoutProvider } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'antd/dist/antd.css';

const rootElement = document.getElementById('root') as HTMLElement;
const queryClient = new QueryClient();

ReactDOM.createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LayoutProvider>
        <RouterProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </RouterProvider>
      </LayoutProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
// const main = () => {
//   if (rootElement.hasChildNodes()) {
//     hydrate(Root, rootElement);
//   } else {
//     render(Root, rootElement);
//   }
// };
