import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Examp_Result} from './MyFunction/Utility'
import {Simple,Var_function,Use_varfunction,Get_value,Use_child} from "./MyFunction/Function_type"
import User_info from "./MyFunction/Property_type"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Examp_Result/>
       <Simple/> 
      <Var_function/>
      <Use_varfunction/>
      <Use_child></Use_child>
     <Get_value your_name="mohammad reza"/>
     <User_info _name="mohammad " _last_name="rostami" _age="25"></User_info>

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
