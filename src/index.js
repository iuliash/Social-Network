import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import './App.css'

  var lastScrollTop = 0;
  window.scroll(e => {
  var st = this.scrollTop();
  if (st > lastScrollTop){
 // код для прокрутки вниз
     ('header').removeClass('active');
  } else {
// код для прокрутки вверх
    ('header').addClass('active');
  }
  lastScrollTop = st;
  })

ReactDOM.render(<App />, document.getElementById('root'));
