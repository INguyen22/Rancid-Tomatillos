import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const router = <BrowserRouter> <App /> </BrowserRouter>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //had to remove strict mode in order for the page to change to the movie details and back
  //has to do with react-router5 not being compatiable with react strictmode
    router
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
