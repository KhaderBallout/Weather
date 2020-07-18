import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header.js';
import Middle from './Middle.js';
import Footer from './Footer.js';
import * as serviceWorker from './serviceWorker';
import Details from './Details';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
