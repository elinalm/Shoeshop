import React from "react";

export const CartContext = React.createContext();

export default class CartProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

//   componentDidMount() {

//   }

  addToCart = (productId, size, quantity) => {
    // event.preventDefault()
    // event.stopPropagation();
    // alert("hej")
    if(this.state.cart.length < 1) {
    this.state.cart.push(productId, {size, quantity})
    console.log(this.state.cart)     
    }  else {
      for(const cart of this.state.cart ) {
        if(cart.size == size) {
          this.state.cart.splice(1, 1)
          console.log("match")
          console.log(this.state.cart)     
        } 
        this.state.cart.push(productId, {size, quantity})
      }
    }

    // let itemInCart = this.state.cart.find((element) => element.productId)
    // console.log(itemInCart, "itemincart");

    
    // if (itemInCart === undefined) {
    //   itemInCart = { id: productId};
    //   this.setState((currentState) => [...currentState, itemInCart]);
    //   console.log(this.state.itemInCart)
    // }
    // else {
    //   itemInCart.quantity += 1
    //   this.setState((currentState) => [...currentState]);
    //   console.log(this.state.itemInCart)
    // }
  }


  render() {
    return (
      <CartContext.Provider
        value={{
          state: this.state,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
export const CartConsumer = CartContext.Consumer;
