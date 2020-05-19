import React, { useContext } from 'react';
import { Box, Carousel, Heading, Image, Text } from "grommet";
import { CartContext } from '../context/cartContext';
import Button from './AddToCartButton'
import { Product } from './allProducts';

// interface Props {
//     product?: Product
// }

export default function ProductView(props) {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        let itemInCart = cart.find((element) => element.id === props.product?.id)
        if (itemInCart === undefined) {
            itemInCart = { id: props.product?.id, price: props.product?.price, quantity: 1 };
            setCart((currentState) => [...currentState, itemInCart]);
        }
        else {
            itemInCart.quantity += 1
            setCart((currentState) => [...currentState]);
        }
    }

    if (!props.product) {
        return (
            <Box>
                <Heading level={3}>
                    Sorry, we couldn't find what you were looking for
                </Heading>
            </Box>
        )
    }

    const displayImages = props.product.img.map((item) =>
        <Image fit="contain" style={{ width: '100%', height: '100%' }} src={item} />)


    return (
        <Box direction='row' justify='evenly' align='center' margin='medium'
            wrap={true} gap='medium'>
            <Box border='all' round width='medium' height='medium' pad='small' >
                <Carousel fill play={5000}>
                    {displayImages}
                   
                </Carousel>
            </Box>
            <Box direction='column'>
                <Box align='center' justify='center'>
                    <Heading level='2' color='brand'>{props.product.name}</Heading>
                </Box>
                <Box width='medium'>
                    <Text>{props.product.description}</Text>
                </Box>
                <Box direction='row' margin='medium' justify='evenly' align='center'>
                    <Text style={{ textAlign: 'justify' }} color='brand'>{props.product.price} sek</Text>
                    <Button onClick={addToCart} />
                </Box>
            </Box>
        </Box>
    );
}
