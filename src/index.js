import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //App.js
//import Card from './Card'; //card.js
//import CardList from './CardList';
import 'tachyons';
//import {robots} from './robots'; //use ./fileName if the file is in same directory
import * as serviceWorker from './serviceWorker';

/*ReactDOM.render(
  <React.StrictMode>
    <App /> //using App.js component
  </React.StrictMode>,
  document.getElementById('root')
);*/
//div is use to return single element
ReactDOM.render(
	<App/>
	,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
