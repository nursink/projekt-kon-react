import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MemeProvider } from './context/context';
import {ThemeProvider} from '@mui/material';
import { theme } from './context/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(theme)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MemeProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
