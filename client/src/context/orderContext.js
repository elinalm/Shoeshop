import React from "react";

export const OrderContext = React.createContext();

export default class OrderProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  createOrder = async (data) => {     
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

  render() {
    return (
      <OrderContext.Provider
        value={{
          state: this.state,
          createOrder: this.createOrder
        }}
      >
        {this.props.children}
      </OrderContext.Provider>
    );
  }
}

export const OrderConsumer = OrderContext.Consumer;
