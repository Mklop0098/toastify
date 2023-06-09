import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContextProvider } from './contexts/ToastContext';
import { ModalContextProvider } from './contexts/ModalContext';
import { ThemeContextProvider } from './contexts/ThemeContext';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeContextProvider>
    <ToastContextProvider>
      <ModalContextProvider>
            <App />
      </ModalContextProvider>
    </ToastContextProvider>
  </ThemeContextProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
