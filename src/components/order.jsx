import React, { Component } from 'react';

class Order extends Component{

    constructor(props){
        super(props)
    this.state={};
    this.addEventHandler=this.addEventHandler.bind(this);
    }

 
addEventHandler(){
this.setState( {
    id:101,
    name:"rohit",
    description:"grocery"
});
console.log("completed");
}

render(){

return(
<div>
    <button onClick={this.addEventHandler} > add order </button>
    <p>order id: {this.state.id}</p>
</div>
);

}
}

export default Order;