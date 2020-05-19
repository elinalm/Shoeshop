import React from 'react'
import { Box, Heading, Text } from 'grommet'

// interface Props {
//     stageNum: number
//     userSnap: { name: string; adr: string; adr1: number; adr2: string; mobNum: number }
//     orderCost: number
//     totalItems: React.ReactNode
//     arrivalDate: string
// }

function CartSummary(props) {
    return (
        <Box animation='fadeIn' margin='small' pad='small' justify='start' align='start' elevation='large'>
            <Heading alignSelf='center' color={'brand'} level={4}>Your Cart</Heading>
            <Box pad='medium'>
                <Box width='small' justify='between' direction='row-responsive'>
                    <Text>{props.totalItems} items</Text>
                    <Text color='brand'>{(props.orderCost).toFixed(2)} SEK</Text>
                </Box>
                <Box style={props.stageNum >= 2 ? { display: 'block' } : { display: 'none' }}>
                    <Text>Deliver To:</Text>
                    <Text> <br />{props.userSnap.name} <br /> {props.userSnap.adr}<br />
                    {props.userSnap.adr1} {props.userSnap.adr2}
                        <br /> {props.userSnap.mobNum}</Text>
                </Box>
                <Box style={props.stageNum >= 3 ? { display: 'block' } : { display: 'none' }}>
                    <Text>Reaches you:</Text>
                    <Text color='brand'> {props.arrivalDate}</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default CartSummary
