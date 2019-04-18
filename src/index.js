import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import {BrowserRouter} from "react-router-dom";
import Greeting from "./components/greeting";
import OrderDetail from "./components/orderdetails";
import CustomerEvent from "./components/customerevent"
import Order from "./components/order.jsx";
import OrderForm from './components/orderform';
let customer={
  id:101,
  name:99,
  age:28,
  address:'delhi'

};

let name = 99;
let age='ram';



ReactDOM.render(
  <App/>
      , document.getElementById("root"));
//ReactDOM.render(
//   <Greeting  name={name} age= {age} />,
//   document.getElementById("root1")
// );
//ReactDOM.render(<OrderDetail customer={customer}  />  ,document.getElementById("root2"));

