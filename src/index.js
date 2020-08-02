import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './Components/App/App';
import Slideshow from './Components/Slideshow/Slideshow';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Slideshow />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
