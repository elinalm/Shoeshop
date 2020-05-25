import React from "react";

export const ProductContext = React.createContext();

export default class ProductProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedProducts: [],
      categories: []
    };
    // this.createProduct = this.createUser.bind(this);
    this.getDisplayedProducts = this.getDisplayedProducts.bind(this);
    // this.updateUser = this.updateUser.bind(this);
    // this.deleteUser = this.deleteUser.bind(this);

  }

  componentDidMount() {
    this.getDisplayedProducts();
    this.getCategories()
  }

  //Get all products
  async getDisplayedProducts(category) {
    try {
      let endPoint = "http://localhost:5000/product"
      if (category) {
        endPoint = `http://localhost:5000/product/${category}`

      }
      console.log('endPoint', endPoint)
      const response = await fetch(endPoint, {
        credentials: "include",
      })
      const data = await response.json();
      this.setState({ displayedProducts: data });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all categories
  getCategories = async () => {
    try {
      const response = await fetch(`http://localhost:5000/product/categories`, {
        credentials: "include",
      });
      const data = await response.json();
      this.setState({ categories: data });
      //console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get all products of a particular category
  getProductsInCategory = async (category) => {
    try {
      const response = await fetch(`http://localhost:5000/product/${category}`, {
        credentials: "include",
      });
      const data = await response.json();
      //this.setState({ allProducts: data });
      //console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  //   async createProduct(data) {
  //     const response = await fetch("http://localhost:5000/users/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     if (response.status === 200) {
  //       const responseData = await response.json();
  //       this.setState({ username: responseData.username });
  //       this.setState({ failedRegister: false });
  //     } else if (response.status === 403) {
  //       this.setState({ failedRegister: true });
  //     }
  //   }



  //   async updateProducts(id, value) {
  //     try {
  //       await fetch(`http://localhost:5000/users/${id}`, {
  //         method: "PUT",
  //         credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(value),
  //       });
  //       this.setState({ failedEditUser: false });
  //       this.getAllUsers();
  //     } catch {
  //       console.log("Error");
  //       this.setState({ failedEditUser: true });
  //     }
  //   }

  //   async deleteProduct(id) {
  //     try {
  //       await fetch(`http://localhost:5000/users/${id}`, {
  //         method: "DELETE",
  //         credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       this.getAllUsers();
  //     } catch {
  //       console.log("Error");
  //     }
  //   }

  render() {
    return (
      <ProductContext.Provider
        value={{
          state: this.state,
          getDisplayedProducts: this.getDisplayedProducts,
          //   createProduct: this.createProduct,
          //   updateProduct: this.updateProduct,
          //   deleteProduct: this.deleteProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
export const ProductConsumer = ProductContext.Consumer;
