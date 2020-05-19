import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Button from './AddToCartButton'
import { Box, Image, Heading } from 'grommet';
import { Link } from 'react-router-dom';

// interface Props {
//   name: string,
//   id: number,
//   price: number,
//   img: string[],
//   desc?: string,
//   category?: string
// }

export default function ProductCard(props) {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (event) => {
    event.preventDefault()
    event.stopPropagation();

    let itemInCart = cart.find((element) => element.id === props.id)
    if (itemInCart === undefined) {
      itemInCart = { id: props.id, price: props.price, quantity: 1 };
      setCart((currentState) => [...currentState, itemInCart]);
    }
    else {
      itemInCart.quantity += 1
      setCart((currentState) => [...currentState]);
    }
  }
  return (
    <Link to={"/product/" + props.id} style={{ textDecoration: 'none', color: 'white' }}>
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
        <Image fit='cover' src={props.img[0]} alt="" style={{ width: '100%', maxHeight: '100%' }} />
        <p>{props.price} SEK</p>
        <Button onClick={addToCart} />
      </Box>
    </Link>
  )
}

