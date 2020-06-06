import React, { useContext } from 'react'
import { Archive } from 'grommet-icons'
import { Button, Box, Stack, Text } from "grommet";
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import { UserContext } from '../context/userContext'

export const CheckoutButton = (props) => {
const cartValue = useContext(CartContext)
const userValue = useContext(UserContext)

    return (
        <Stack anchor="top-left" >
            <Link to='/MyCart'>
                <Button
                    icon={<Archive size='medium' />}
                    label={props.showLabel ? 'My ShoeBox' : ''}
                    primary
                    color="brand"
                    disabled={userValue.state.loggedInUser ? false : true}
                />
            </Link>
            <Box
                background="light-1"
                style={cartValue.state.cart.length === 0 || !userValue.state.loggedInUser ? { display: 'none' } : { display: 'block' }}
                pad={{ horizontal: 'xsmall' }}
                round
            >
                {<Text >{cartValue.state.cart.length}</Text>}
            </Box>
        </Stack>
    )
}
