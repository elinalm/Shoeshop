import React from "react";


export const ProductContext = React.createContext();

export default class ProductProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayedProducts: [],
      categories: [],
      productDetails : []
    }
  }

  componentDidMount() {
    this.getCategories()
  }

  //Get all products
  getDisplayedProducts = async (category) => {
    try {

      let endPoint = "http://localhost:5000/product"
      //let validCategory = this.state.categories.includes(category)
      if (category && category !== 'Home') {
        endPoint = `http://localhost:5000/product/${category}`
      }


      const response = await fetch(endPoint, {
        credentials: "include",
      })
      const data = await response.json();
      this.setState({ displayedProducts: data });

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
      })
      const data = await response.json();
      this.setState({ categories: data });

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  //Get specific product
  getProductDetails = async(id) =>{
    try {
      const response = await fetch(`http://localhost:5000/product/details/${id}`, {
        credentials: "include",
      })
      const data = await response.json();
      this.setState({productDetails: data})
      return data;
    } catch (error) {
      console.log('error');
    }
  }

  //deleteProduct
  deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response;
      this.getDisplayedProducts()
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  addProduct = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/product/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      this.getDisplayedProducts()
    }
    catch (error) {
      console.log(error);
    }
  }


  //Edit Product
  updateProduct = async (id, value) => {
    try {
      await fetch(`http://localhost:5000/product/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const category = window.location.pathname.split('/')      
      this.getDisplayedProducts(category[category.length-1])
    } catch {
      console.log("Error");
    }
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          state: this.state,
          getDisplayedProducts: this.getDisplayedProducts,
          deleteProduct: this.deleteProduct,
          updateProduct: this.updateProduct,
          addProduct: this.addProduct,
          getProductDetails :this.getProductDetails
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
