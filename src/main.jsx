import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);
root.render(<App/>);