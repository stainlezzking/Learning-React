
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header,Pic,Like} from './group';
import logo from './logo192.png'
import './app.css'
import App from './App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="index" >
         <Header name="React dev" />
         <Pic classN="img_fluid"/>
          <App />
          <div style={{fontSize:10+"px",padding:0+"px "+15+"px" }}>
            1000000
          </div>
    </div>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
