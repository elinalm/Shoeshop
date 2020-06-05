import React from "react";

export const OrderContext = React.createContext();

export default class OrderProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allOrders: []
    }
  }
  
  createOrder = async (data) => {
      console.log("post createorder");
      
    try {
      const response = await fetch("http://localhost:5000/order/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
    }
    catch (error) {
      console.log(error, 'this error');

    }
  }

   getAllOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/order/", {
        credentials: "include",
      });

      const responseData = await response.json();
      console.log("ORDERS", responseData)
      this.setState({allOrders: responseData})
    }
    catch (error) {
      console.log(error, 'this error');

    }
  
  }

  render() {
    return (
      <OrderContext.Provider
        value={{
          state: this.state,
          createOrder: this.createOrder,
          getAllOrders: this.getAllOrders
        }}
      >
        {this.props.children}
      </OrderContext.Provider>
    );
  }
}

export const OrderConsumer = OrderContext.Consumer;
