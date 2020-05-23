import React, { useState } from 'react';
import Button from './AddToCartButton'
import { Box, Image, Heading, Select, Text } from 'grommet';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  const [size, setSize] = React.useState('')
  // const addToCart = (event) => {
  //   event.preventDefault()
  //   event.stopPropagation();

  //   let itemInCart = cart.find((element) => element.id === props.id)
  //   if (itemInCart === undefined) {
  //     itemInCart = { id: props.id, price: props.price, quantity: 1 };
  //     setCart((currentState) => [...currentState, itemInCart]);
  //   }
  //   else {
  //     itemInCart.quantity += 1
  //     setCart((currentState) => [...currentState]);
  //   }
  // }
  return (

    <Box
      round='small'
      pad='small'
      fill
      elevation="large"
      key={props.id}
      background="light-3"
      flex={false}
      justify="center"
      align="center"
    >
      <Heading margin="none" level='3'>{props.name}</Heading>
      <Link to={"/product/" + props.id} style={{ textDecoration: 'none', color: 'white' }}>
        <Image fit='cover' src={props.img} alt="" style={{ width: '100%', maxHeight: '100%' }} />
      </Link>
      <Text>{props.price} SEK</Text>
     
        <Select
        style={{minWidth:'2rem', maxWidth: '5rem'}}
          plain={true}
          name='size'
          placeholder="Size"
          options={props.size}
          value={size}
          onChange={({ option }) => setSize(option)}
        />
     
      <Button />

    </Box>

  )
}

