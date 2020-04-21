import React from 'react'; 
import ReactDOM, {render} from 'react-dom'; 
import './index.css'; 
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom' 
import {browserHistory} from 'react-router' 
import config2 from './components/config2';
import firebase from 'firebase/app'
import 'firebase/firestore'
//Leaflet  

if( firebase.apps.length === 0)
    firebase.initializeApp(config2)

export const firestore = firebase.firestore()

render(  
   <BrowserRouter>    
    <App />   
    </BrowserRouter>, 
      document.querySelector('#root') 
      ) 
       serviceWorker.unregister();
