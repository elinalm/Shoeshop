import React, { useContext } from 'react';
import { Box, Carousel, Heading, Image, Text, Select } from "grommet";
import Button from './AddToCartButton'

export default function ProductView(props) {
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

    if (!props.product) {
        return (
            <Box>
                <Heading level={3}>
                    Sorry, we couldn't find what you were looking for
                </Heading>
            </Box>
        )
    }

    // const displayImages = props.product.img.map((item) =>
    //     <Image fit="contain" style={{ width: '100%', height: '100%' }} src={item} />)

    return (
        <Box direction='row' justify='evenly' align='center' margin='medium' wrap={true} gap='medium'>

            <Box border='all' round width='medium' height='medium' pad='small' >
                <Carousel fill play={5000}>
                <Image fit="contain" style={{ width: '100%', height: '100%' }} src={props.product.img} />

                </Carousel>
            </Box>
            <Box direction='column'>
                <Box align='center' justify='center'>
                    <Heading level='2' color='brand'>{props.product.brand}</Heading>
                </Box>
                <Box width='medium'>
                    <Text>{props.product.description}</Text>
                </Box>
                <Box>
                    {props.product.size}
                </Box>
                <Box direction='row' margin='medium' justify='evenly' align='center'>
                    <Text style={{ textAlign: 'justify' }} color='brand'>{props.product.price} sek</Text>
                    <Button />
                </Box>
            </Box>
        </Box>
    );
}
