import React from "react";

export const CartContext = React.createContext();

export default class CartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      shippingDetails: [],
    }
  
  }

  componentDidMount() {
    this.getShippingDetails()
    let savedCart = JSON.parse(localStorage.getItem("cart"))
    if(savedCart){
      this.setState({cart : savedCart})
    }
  }

  clearCart = () => {
    this.setState({ cart: [] })
    localStorage.removeItem("cart")
  }

  addToCart = (product, size, quantity, maxNumAllowed) => {
    const isInCart = this.state.cart.some(
      (row) => row.product._id === product._id
    );
    const clonedCart = Object.assign([], this.state.cart);


    if (!isInCart) {
      let newProductRow = {
        product,
        items: [{ size, quantity, maxNumAllowed }],
      };
      clonedCart.push(newProductRow);
    } else {
      const productRow = clonedCart.find(
        (row) => row.product._id === product._id
      );

      const sizeExist = productRow.items.some(
        (item) => item.size === size
      );

      if (sizeExist) {
        const sizeExisting = productRow.items.find(
          (item) => item.size === size
        );
        sizeExisting.quantity = quantity;
      } else {
        productRow.product.items.push({ size, quantity, maxNumAllowed });
      }
    }

    this.setState({ cart: clonedCart });
    localStorage.setItem("cart", JSON.stringify(clonedCart));
    this.getTotal(this.state.cart);
  };

  updateMaxNum = async () => {



    // const isInCart = this.state.cart.some(
    //   (row) => row.product._id === product._id
    // );
    // const clonedCart = Object.assign([], this.state.cart);

    // if (!isInCart) {
    //   let newProductRow = {
    //     product,
    //     items: [{ size, quantity, maxNumAllowed }],
    //   };
    //   clonedCart.push(newProductRow);

  }

  getTotal = (carts) => {
    let res = 0;
    let quantityOfItem = 0;
    

    for (const cart of carts) {
      quantityOfItem = 0;
      for (const item of cart.items) {
        quantityOfItem += item.quantity;
      }
      res += cart.product.price * quantityOfItem;
    }
    return res;
  };

  increaseQuantity = (item, _id) => {
    
    const clonedCart = Object.assign([], this.state.cart);
    console.log("clonedCart",clonedCart)
    const productInCart = clonedCart.find((row) => row.product._id === _id);
    console.log("productInCart", productInCart)
    const itemInCart = productInCart.items.find(
      (element) => element.size === item.size
    );

    if (itemInCart.quantity < itemInCart.maxNumAllowed) {
      itemInCart.quantity += 1;
    }
    this.setState({ cart: clonedCart });
    localStorage.setItem("cart", JSON.stringify(clonedCart));
  };

  decreaseQuantity = (item, _id) => {
    const clonedCart = Object.assign([], this.state.cart);
    const productInCart = clonedCart.find((row) => row.product._id === _id);
    const itemInCart = productInCart.items.find(
      (element) => element.size === item.size
    );

    itemInCart.quantity -= 1;

    if (itemInCart.quantity <= 0) {
      const index = productInCart.items.findIndex(
        (element) => element.size === item.size
      );
      productInCart.items.splice(index, 1);
    }

    if (productInCart.items.length === 0) {
      const removeItemIndex = clonedCart.findIndex(
        (element) => element._id === _id
      );
      clonedCart.splice(removeItemIndex, 1);
    }
    this.setState({ cart: clonedCart });
    localStorage.setItem("cart", JSON.stringify(clonedCart));
  };

  getShippingDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/shipping/`, {
        credentials: "include",
      });
      const data = await response.json();
      this.setState({ shippingDetails: data });

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          state: this.state,
          addToCart: this.addToCart,
          getTotal: this.getTotal,
          increaseQuantity: this.increaseQuantity,
          decreaseQuantity: this.decreaseQuantity,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
export const CartConsumer = CartContext.Consumer;
