import React from "react";

export const CartContext = React.createContext();

export default class CartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        // {
        //   product: "5ece4db80f1af97f08f1308d",
        //   brand: "Michael Jordan shoe",
        //   image: "5ed9fb6925a96416d8b9ecae",
        //   items: [
        //     { size: 43, quantity: 2, maxNumAllowed: 10 },
        //     { size: 44, quantity: 3, maxNumAllowed: 10 },
        //   ],
        //   price: 399,
        // },

      ],
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

  addToCart = (productId, brand, price, imageUrl, size, quantity, maxNumAllowed) => {
    const isInCart = this.state.cart.some(
      (element) => element._id === productId
    );
    const clonedCart = Object.assign([], this.state.cart);


    if (!isInCart) {
      let newProduct = {
        _id: productId,
        brand: brand,
        price: price,
        imageUrl: imageUrl,
        items: [{ size, quantity, maxNumAllowed }],
      };
      clonedCart.push(newProduct);
    } else {
      const productRow = clonedCart.find(
        (element) => element._id === productId
      );

      const sizeExist = productRow.items.some(
        (element) => element.size === size
      );

      if (sizeExist) {
        const sizeExisting = productRow.items.find(
          (element) => element.size === size
        );
        sizeExisting.quantity = quantity;
      } else {
        productRow.items.push({ size, quantity, maxNumAllowed });
      }
    }

    this.setState({ cart: clonedCart });
    localStorage.setItem("cart", JSON.stringify(clonedCart));
    this.getTotal();
  };

  getTotal = () => {
    let res = 0;
    let quantityOfItem = 0;
    let carts = this.state.cart;

    for (const cart of carts) {
      quantityOfItem = 0;
      for (const item of cart.items) {
        quantityOfItem += item.quantity;
      }
      res += cart.price * quantityOfItem;
    }
    return res;
  };

  increaseQuantity = (item, _id) => {

    const clonedCart = Object.assign([], this.state.cart);
    const productInCart = clonedCart.find((element) => element._id === _id);
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
    const productInCart = clonedCart.find((element) => element._id === _id);
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
