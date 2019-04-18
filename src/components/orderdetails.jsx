import React, { Component } from 'react';
import Customer from './customer';
class OrderDetail extends Component{




    render(){


        const order = this.props.order.map((order) => {
            return (
              <div key={order.id}>
                <p > orderId: {order.id} </p>
                <p>orderName: {order.name}</p>
                <p>orderdescription: { order.description} </p>
                
              </div>
            );
        });




    return(
        <div>
            <Customer customer={this.props.customer}></Customer>
            <h1>order deatil</h1>
            {order}
                   
        </div>


    );
}

}
export default OrderDetail;