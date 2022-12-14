import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import './scss/index.scss';
import { RecoilRoot } from 'recoil';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
);
