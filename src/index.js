import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Slideshow from './Slideshow';
import Nav from './Nav';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Slideshow />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
