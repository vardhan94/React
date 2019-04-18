import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Customer extends Component{
constructor(props)
{
super(props);
//this.state=Customer;
}
 render(){
return(
<div>
<h1>Customer Detail</h1>
<p> customer Id : {this.props.customer.id} </p>
<p>customer name :  {this.props.customer.name}</p>
<p>customer age :  {this.props.customer.age}</p>
<p>customer address :  {this.props.customer.address}</p>
</div>

);

 }

}
Customer.defaultProps={
id: "default",
name :"default",
age: "default",
address: "default"
};

Customer.propTypes={
id : PropTypes.number,
name: PropTypes.string,
age : PropTypes.number,
address : PropTypes.string

};

export default Customer;