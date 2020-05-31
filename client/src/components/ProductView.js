import React from "react";
import { Box, Carousel, Heading, Image, Text} from "grommet";
import SizeAndQuantity from './SizeAndQuantity'
import { CartConsumer } from "../context/cartContext";

export default function ProductView(props) {
  if (!props.product) {
    return (
      <Box align="center" justify="center">
        <Heading level={3}>
          Sorry, we couldn't find what you were looking for
        </Heading>
      </Box>
    );
  }

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
            <SizeAndQuantity {...props}/>
           </Box>
        </Box>
      )}
    </CartConsumer>
  );
}
