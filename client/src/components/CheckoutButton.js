import React, { useContext } from 'react'
import { Shop } from 'grommet-icons'
import { Button, Box, Stack, Text } from "grommet";
import { CartContext } from "../context/cartContext";
import { Link } from 'react-router-dom'

export const CheckoutButton = (props) => {
    const [cartItems, setCart] = useContext(CartContext)

    return (
        <Stack anchor="top-left" >
            <Link to='/MyCart'>
                <Button
                   focusIndicator={false}
                    icon={<Shop size='medium' />}
                    label={props.showLabel ? 'My Cart' : ''}
                    primary
                    color="brand"
                />
            </Link>
            <Box
                background="light-1"
                style={numItems(cartItems) === 0 ? { display: 'none' } : { display: 'block' }}

                pad={{ horizontal: 'xsmall' }}
                round
            >
                <Text >{numItems(cartItems)}</Text>
            </Box>
        </Stack>
    )
}


export function numItems(cartItems){
    
    let numItems = 0
    for (let item of cartItems) {
        numItems += item.quantity
    }
    return numItems
}