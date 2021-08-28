import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './header/header.js';
import Footer from './footer/footer.js'

ReactDOM.render(
  <>
    <Header />
    <App />
    <Footer />
  </>,
  document.getElementById('root')
);


