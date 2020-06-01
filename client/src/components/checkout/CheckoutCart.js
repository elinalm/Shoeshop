import React, { useContext, useState, useEffect } from "react";
import { Box } from "grommet/components/Box";
import { Grommet } from "grommet/components/Grommet";
import { List, Text, Button, Paragraph, Image, Select } from "grommet";
import { AddCircle, SubtractCircle, LinkNext } from "grommet-icons";
import { Link } from "react-router-dom";
import { theme } from "../../index";
import { CartContext } from "../../context/cartContext";
import { ProductContext } from "../../context/productContext";

export default function CheckoutCart() {
  const cartValue = useContext(CartContext);
  const productValue = useContext(ProductContext);
  const [size, setSize] = useState("");
  const [id, setId] = useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [maxQuantity, setMaxQuantity] = React.useState("");
  const [quantityArray, setQuantityArray] = React.useState([]);

  useEffect(() => {}, [cartValue]);

  useEffect(() => {
    maxQuantityOfSize();
  }, [size]);

  const maxQuantityOfSize = () => {
    console.log("SIZE", size);
    console.log("product", productValue.state.displayedProducts);
    for (const shoes of productValue.state.displayedProducts)
      if (shoes._id == id) {
        console.log("MMATACHFHFHFH");
        for (const shoe of shoes.inventory) {
          if (shoe.size == size) {
            console.log(shoe.quantity);
            setMaxQuantity(shoe.quantity);
            maxQuantityArrayOfSize(shoe.quantity);
          }
        }
      }
      console.log("MAX", maxQuantity);
      
  };

  const maxQuantityArrayOfSize = (maxQuantity) => {
    setMaxQuantity(maxQuantity)
    let testArray = [];
    for (let i = 0; i < maxQuantity; i++) {
      testArray.push(i + 1);
    }
    setQuantityArray(testArray);
    console.log(quantityArray);
    return testArray;
  };

  return (
    <Grommet theme={theme}>
      <Box pad="large" wrap={true} direction="row-responsive" justify="between">
        <List
          data={cartValue.state.cart}
          primaryKey={(item) => (
            <Box
              direction="row-responsive"
              wrap={true}
              gap="small"
              justify="center"
              align="center"
            >
              <Text size="large" weight="bold">
                {item.brand}
              </Text>
              <Box height="xsmall" width="small">
                <Image fit="contain" src={item.img}></Image>
              </Box>
              <Box
                direction="row"
                wrap={true}
                gap="small"
                justify="center"
                align="center"
              >
                <Box direction="column">
                  <Text>Size & quantity</Text>

                  <List
                    primaryKey="size"
                    secondaryKey="quantity"
                    data={item.items}
                  >
                    {(datum, index) => (
                      <Box
                        key={index}
                        direction="row-responsive"
                        gap="large"
                        size="xsmall"
                        align="center"
                      >
                        <Text>{datum.size}</Text>
                        <Text>{datum.quantity}</Text>
                        {console.log("datum.quantity", datum.quantity)}
                        <Box direction="row">
                          {console.log("maxQuantity", maxQuantity)}
                          {datum.quantity 
                          // < maxQuantity 
                          && (
                            <Button
                              hoverIndicator
                              style={{ borderRadius: "50%" }}
                              size="small"
                              icon={<AddCircle size="medium" color="dark-1" />}
                              onClick={() => {
                                cartValue.increaseQuantity(
                                  datum,
                                  item._id,
                                  maxQuantity
                                );
                              }}
                            />
                          )}
                          {console.log(maxQuantity, "maxquantity")}
                          <Button
                            hoverIndicator
                            size="small"
                            style={{ borderRadius: "50%" }}
                            icon={
                              <SubtractCircle size="medium" color="dark-1" />
                            }
                            onClick={() => {
                              cartValue.decreaseQuantity(datum, item._id);
                            }}
                          />
                        </Box>
                      </Box>
                    )}
                  </List>
                </Box>

                {/* <Select
                  style={{ minWidth: "2rem", maxWidth: "5rem" }}
                  plain={true}
                  name="size"
                  placeholder={item.items[0].size}
                  options={item.items.map(element => element.size)}
                  value={size}
                  onChange={({ option }) => {setSize(option); setId(item._id)}}
                  />
                  {console.log(cartValue.state.cart)}

                  {quantityArray && (
                <Select
                  plain={true}
                  name="quantity"
                  placeholder={item.items[0].quantity}
                  options={quantityArray}
                  value={quantity}
                  onChange={({option}) => {setQuantity(option)}}
                />
              )} */}
              </Box>
            </Box>
          )}
          secondaryKey={(item) => (
            <Box>
              <Paragraph size="large">
                {item.price}
                <Text size="small" color="dark-4">
                  {" "}
                  SEK/piece
                </Text>
              </Paragraph>
            </Box>
          )}
        />
        <Box align="end" gap="small">
          <Paragraph size="large">
            Total = {cartValue.getTotal()}
            <Text size="small" color="dark-4">
              {" "}
              SEK
            </Text>
          </Paragraph>
          <Box animation="pulse">
            <Link to="/Checkout">
              <Button
                size="small"
                primary
                label="to checkout"
                icon={<LinkNext />}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export const totalPrice = (cartItems) => {
  let totalPrice = 0;
  for (let item of cartItems) {
    totalPrice += item.quantity * item.price;
  }
  return totalPrice;
};

// const productValue = useContext(ProductContext)
// const addToCart = (data) => {
//     let itemInCart = cartItems.find((element) => element.id === data)
//     itemInCart.quantity += 1
//     setCart((currentState) => [...currentState])
//     console.log(itemInCart)
// }
// const arrayRemove = (arr, value) => {
//     return arr.filter(function (ele) {
//         return ele !== value
//     })
// }
// const removeFromCart = (data) => {
//     let itemInCart = cartItems.find((element) => element.id === data)
//     if (itemInCart.quantity > 1) {
//         itemInCart.quantity -= 1
//         setCart((currentState) => [...currentState])
//         console.log(itemInCart)
//     }
//     else {
//         setCart(arrayRemove(cartItems, itemInCart))
//     }
// }

// const getNameandImage = (data) => {
//     let itemInCartValues = products.find((element) => element.id === data)
//     if (itemInCartValues) { return [itemInCartValues.name, itemInCartValues.img[0]] }
//     else {
//         return ['']
//     }
// }
