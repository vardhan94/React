import React, { Component } from 'react';

class OrderForm extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:''
        };
        this.formclick=this.formclick.bind(this);
    }

formclick(e){
   
    e.preventDefault();
    // let id=this.refs.orderid.value;
    // let name=this.refs.ordername.value;
    let id = this.orderid.value;
    let name = this.name.value;
   // debugger;
     this.setState(
  {
          id: id,
      name: name
  } , () => {
    console.log("id : "+ this.state.id);
    console.log("name  :" + this.state.name);

  }
     );
 // componentDidUpdate(prevProps,prevState);
     
 
};
 
componentDidUpdate (prevProps,prevState){
    if(this.state.id !== prevState.id && 
        this.state.name !== prevState.name )
   { this.setState({
        id:this.orderid.value,
        name:this.name.value

    });
}
}

    render(){
     console.log(this.state.id + this.state.name);

return(
<div>
    <form onSubmit={this.formclick}>
    <input type='number' name='orderid' ref={(input)=> this.orderid=input} />
    <input type='text' name='ordername' ref={(input)=> this.name=input} />
    {/* <input type='number' name='orderid' ref='orderid' /> */}
    {/* <input type='text' name='ordername' ref='ordername' /> */}
    <input type='submit' name='saveorder'  />
    </form>
</div>
);

    }
}


export default OrderForm;