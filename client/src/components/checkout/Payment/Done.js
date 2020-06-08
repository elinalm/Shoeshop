import React from "react";
import { Box, Button, Image, Heading, Text, Layer } from "grommet";
import { LinkNext, } from "grommet-icons";
import { Link } from 'react-router-dom'
import SuccessPurchase from '../../../assets/successful_purchase.svg'

function Done(props) {
    return (
        <Box justify='center' alignSelf='center' align='center' direction='row' wrap='reverse'>
            <Box pad={{ top: 'small' }}>
                <Image src={SuccessPurchase} />
            </Box>
            <Box pad='medium' gap='medium'>
                <Box align='center' justify='center'>
                    <Heading margin='none' textAlign='center' level={2}>Thanks! You're All Set </Heading>
                    <Link to='/Home'>
                        <Button
                            primary
                            reverse={true}
                            icon={<LinkNext />}
                            label='Continue Shopping '
                            margin='small'
                        />
                    </Link>
                </Box>
                <Text>Your order
                <Text  color='neutral-1' weight='bold' margin='xsmall'> {props.orderHistory._id} </Text>
                 will reach you on <Text color='neutral-1' weight='bold' margin='xsmall'>{props.arrivalDate} </Text></Text>
            </Box>
        </Box>
    )
}

export default Done
