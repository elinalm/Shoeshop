import React, { useContext } from 'react'
import { Archive } from 'grommet-icons'
import { Button, Box, Stack, Text } from "grommet";
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'


export const CheckoutButton = (props) => {
const cartValue = useContext(CartContext)

    return (
        <Stack anchor="top-left" >
            <Link to='/MyCart'>
                <Button
                    icon={<Archive size='medium' />}
                    label={props.showLabel ? 'My ShoeBox' : ''}
                    primary
                    color="brand"

                />
            </Link>
            <Box
                background="light-1"
                style={cartValue.state.cart.length === 0 ? { display: 'none' } : { display: 'block' }}
                pad={{ horizontal: 'xsmall' }}
                round
            >
                {<Text >{cartValue.state.cart.length}</Text>}
            </Box>
        </Stack>
    )
}


// export function numItems(cartItems){

//     let numItems = 0
//     for (let item of cartItems) {
//         numItems += item.quantity
//     }
//     return numItems
// }