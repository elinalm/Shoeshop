import React, { useContext } from 'react'
import { Archive } from 'grommet-icons'
import { Button, Box, Stack, Text } from "grommet";
import { Link } from 'react-router-dom'

export const CheckoutButton = (props) => {

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
                //style={numItems(cartItems) === 0 ? { display: 'none' } : { display: 'block' }}
                pad={{ horizontal: 'xsmall' }}
                round
            >
                {/* <Text >{numItems(cartItems)}</Text> */}
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