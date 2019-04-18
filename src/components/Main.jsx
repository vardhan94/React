import React, { Component } from 'react';
import Home from "./Home";
import OrderDetail from './orderdetails';
import {Order} from "./order"
// import {BrowserRouter} from "react-router-dom";
import {Switch , Route , Redirect} from "react-router-dom";
import App from '../App'

class Main extends Component {
    constructor(props){
        super(props);
this.state = { 
     order: Order,
      customer: {
      id:101,
      name:99,
      age:28,
      address:'delhi'
    
        }
    };
    }

    render() { 
        const HomePage = () => {
            return(
                <Home/>
            );
          }
        return ( 
          <div>
           <Switch>
           <Route path="/" Component={<App/>}/>
 
              <Route path="/Home" Component={<HomePage/>}/>
              <Route exact path="/OrderDetail" Component={() => <OrderDetail 
                   order={this.state.order} customer={this.state.customer} />}/>
             {/* <Redirect to="/Home"/>  */}
     </Switch>
     
         </div>

         );
    }
}
 
export default Main;