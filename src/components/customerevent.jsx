import React, { Component } from 'react';

class CustomerEvent extends Component{

    constructor(props){
        super(props);
        this.state={
            id:101,
            name:"raju",
            age:32
        }
        this.updatecustomer=this.updatecustomer.bind(this);
    }

 updatecustomer(){
     console.log("harsh");
     this.setState({
         id:102,
         name:"rahul",
         age:25
     });
 }

 render(){

    return(
        <div>
            <h1>customer Detail</h1>
            <p>customer id= {this.state.id}</p>
            <p>customer name= {this.state.name}</p>
            <p>customer age= {this.state.age}</p>
            <button onClick={this.updatecustomer}>update customer</button>
        </div>
    );
 }
}
export default CustomerEvent;