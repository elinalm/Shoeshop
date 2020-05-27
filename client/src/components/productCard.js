import React, { useState } from "react";
import { Button } from "grommet";
import { Box, Image, Heading, Select, Text } from "grommet";
import { Link } from "react-router-dom";
import { UserConsumer } from "../context/userContext";
import { CartConsumer } from "../context/cartContext";
import { Cart } from 'grommet-icons'

export default function ProductCard(props) {
  const [size, setSize] = React.useState("");  

  return (
    <Box
      round="small"
      pad="small"
      elevation="large"
      key={props.id}
      background="light-3"
      flex={false}
      justify="center"
      align="center"
      margin="medium"
    >
      <CartConsumer>
      {(cart) => (
      <UserConsumer>
        {(user) => (
          <>
            <Heading margin="none" level="3">
              {props.name}
              {console.log(user.state.loggedInUser, "loggedinuser")}
            </Heading>
            <Link to={"/product/" + props.id}>
              <Image
                fit="contain"
                fill
                src={props.img}
                alt=""
                style={{ width: "100%", height: "100%", alignSelf: "center" }}
                />
            </Link>
            <Text>{props.price} SEK</Text>

            <Select
              style={{ minWidth: "2rem", maxWidth: "5rem" }}
              plain={true}
              name="size"
              placeholder="Size"
              options={props.size}
              value={size}
              onChange={({ option }) => setSize(option)}
              />
            {user.state.loggedInUser &&        
             <Button
            size='small'
            margin={{ 'bottom': 'xsmall' }}
            hoverIndicator
            icon={<Cart />}
            label={'Add To Cart'}
            onClick={ () => cart.addToCart(props.id) }
        />}
          </>
        )}
      </UserConsumer>
      )}
        </CartConsumer>
    </Box>
  );
}
