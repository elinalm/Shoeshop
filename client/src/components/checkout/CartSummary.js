import React from 'react'
import { Box, Heading, Text } from 'grommet'

function CartSummary(props) {
    return (
        <Box animation='fadeIn' margin='small' pad='small' justify='start' align='start' elevation='large'>
            <Heading alignSelf='center' color='neutral-1' level={4}>Your Cart</Heading>
            <Box pad='medium'>
                <Box width='small' justify='between' direction='row-responsive'>
                    <Text>{props.totalItems} item(s)</Text>
                    <Text color='neutral-1'>{(props.orderCost).toFixed(2)} SEK</Text>
                </Box>
                <Box style={props.stageNum >= 2 ? { display: 'block' } : { display: 'none' }}>
                    <Text>Deliver To:</Text>
                    <Text> <br />{props.userSnap.name} <br /> {props.userSnap.adr}<br />
                    {props.userSnap.adr1} {props.userSnap.adr2}
                        <br /> {props.userSnap.mobNum}</Text>
                </Box>
                <Box style={props.stageNum >= 3 ? { display: 'block' } : { display: 'none' }}>
                    <Text>Reaches you:</Text>
                    <Text color='neutral-1'> {props.arrivalDate}</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default CartSummary
