import React from "react";

export const OrderContext = React.createContext();

export default class OrderProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allOrders: [],
      userOrders: []
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
      return responseData
    }
    catch (error) {
      console.log(error, 'this error');

    }
  }

  getAllOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/order/", {
        credentials: "include"
      });
      const responseData = await response.json();
      console.log("ORDERS", responseData)
      this.setState({ allOrders: responseData })
    }
    catch (error) {
      console.log(error, 'this error');
    }
  }

  orderDone = async (id, status) => {
    try {
      await fetch("http://localhost:5000/order/" + id + "/" + "true", {
        method: "PUT",
        credentials: "include"
      });
      this.getAllOrders()
    }
    catch (error) {
      console.log(error, 'this error');
    }
  }

  getUserOrders = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/order/user/${id}`, {
        credentials: "include",
      })
      const data = await response.json();
      this.setState({ userOrders: data })
      console.log(this.state.userOrders)
      return data;
    } catch (error) {
      console.log(error)
      console.log('error');
    }
  }

  render() {
    return (
      <OrderContext.Provider
        value={{
          state: this.state,
          createOrder: this.createOrder,
          getAllOrders: this.getAllOrders,
          orderDone: this.orderDone,
          getUserOrders: this.getUserOrders
        }}
      >
        {this.props.children}
      </OrderContext.Provider>
    );
  }
}

export const OrderConsumer = OrderContext.Consumer;
