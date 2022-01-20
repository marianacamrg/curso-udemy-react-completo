import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const container = document.getElementById("root")
ReactDOM.render(element,container)

reportWebVitals();
