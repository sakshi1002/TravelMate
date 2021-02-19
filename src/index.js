import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appi from './Appi';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <>
  <BrowserRouter>
    <Appi />
  </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);


