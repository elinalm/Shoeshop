import React, { useContext, useEffect } from "react";
import { Box, Carousel, Heading, Image, Text, Select, Button } from "grommet";
// import Button from './AddToCartButton'
import { CartConsumer } from "../context/cartContext";
import { Cart } from "grommet-icons";

export default function ProductView(props) {
  
  const [size, setSize] = React.useState(props.product.inventory[0].size || '');
  const [selectSize, setSelectSize] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [maxQuantity, setMaxQuantity] = React.useState(props.product.inventory[0].quantity || "");
  const [quantityArray, setQuantityArray] = React.useState([]);
  // const addToCart = () => {
  //     let itemInCart = cart.find((element) => element.id === props.product?.id)
  //     if (itemInCart === undefined) {
  //         itemInCart = { id: props.product?.id, price: props.product?.price, quantity: 1 };
  //         setCart((currentState) => [...currentState, itemInCart]);
  //     }
  //     else {
  //         itemInCart.quantity += 1
  //         setCart((currentState) => [...currentState]);
  //     }
  // }
  
    useEffect(() => {
      maxQuantityArrayOfSize()
    }, [])
  
    useEffect(() => {
      maxQuantityOfSize()
    }, [size])

  if (!props.product) {
    return (
      <Box align="center" justify="center">
        <Heading level={3}>
          Sorry, we couldn't find what you were looking for
        </Heading>
      </Box>
    );
  }

  

  const maxQuantityOfSize = () => {
    // console.log(inventories)
    for (const inventory of props.product.inventory) {
      if (inventory.size == size) {
        setMaxQuantity(inventory.quantity);
      }
    }
    maxQuantityArrayOfSize()
    console.log("MAX", maxQuantity);
  };

  const maxQuantityArrayOfSize = () => {
    let testArray = [];
    for (let i = 0; i < maxQuantity; i++) {
      testArray.push(i + 1);
    }
    setQuantityArray(testArray);
    console.log(quantityArray);
  };

  // const displayImages = props.product.img.map((item) =>
  //     <Image fit="contain" style={{ width: '100%', height: '100%' }} src={item} />)

  return (
    // [brand, price, img] = props.product
    <CartConsumer>
      {(cart) => (
        <Box
          direction="row"
          justify="evenly"
          align="center"
          margin="medium"
          wrap={true}
          gap="medium"
        >
          <Box border="all" round width="medium" height="medium" pad="small">
            <Carousel fill play={5000}>
              <Image
                fit="contain"
                style={{ width: "100%", height: "100%" }}
                src={props.product.img}
              />
            </Carousel>
          </Box>
          <Box direction="column">
            <Box align="center" justify="center">
              <Heading level="2" color="brand">
                {props.product.brand}
              </Heading>
            </Box>
            <Box width="medium">
              <Text>{props.product.description}</Text>
            </Box>
            <Box width="small" color="brand" align="center" justify="center">
              <Select
                plain={true}
                name="size"
                placeholder="Size"
                options={props.product.inventory.map((element) => element.size)}
                value={size}
                onChange={({ option }) => {
                  setSize(option);
                
                }}
              />
              {console.log("HÄR", size)}
              {quantityArray && (
                <Select
                  plain={true}
                  name="quantity"
                  placeholder="Quantity"
                  options={quantityArray}
                  value={quantity}
                  onChange={({option}) => {setQuantity(option)}}
                />
              )}
            </Box>
            <Box
              direction="row"
              margin="medium"
              justify="evenly"
              align="center"
            >
              <Text style={{ textAlign: "justify" }} color="brand">
                {props.product.price} sek
              </Text>
              <Button
                size="small"
                margin={{ bottom: "xsmall" }}
                hoverIndicator
                icon={<Cart />}
                label={"Add To Cart"}
                onClick={() =>
                  cart.addToCart(props.product._id, props.product.brand, props.product.price, props.product.img, size, quantity)
                }
              />
            </Box>
          </Box>
        </Box>
      )}
    </CartConsumer>
  );
}
