import React from 'react'
import { Box, Heading, Image, Text } from 'grommet'

// interface Props {
//     deliveryName: string
//     deliveryIcon: string
//     deliveryDate: Date
//     deliveryCost: number
// }
export default function Shipping(props) {
   
    return (
        <Box>
            <Box pad={{ left: 'small' }} direction='row-responsive'>
                <Heading margin='none' level={3}>{props.deliveryName}</Heading>
            </Box>
            <Box direction='row' wrap={true} align='center' justify='start'>
                <Box direction='row' wrap={true} align='center'>

                    <Box pad={{ left: 'small' }} direction='row-responsive'>
                        Reaches you
                    <Text margin={{ left: 'xsmall' }} style={{ fontWeight: 800 }} color='brand'>
                           {reachesYou(props.deliveryDate)}
                        </Text>
                    </Box>
                    <Box pad={{ left: 'small' }} direction='row-responsive' >
                        Shipping Cost:
                        <Text margin={{ left: 'xsmall' }} style={{ fontWeight: 800 }} color='brand'>
                            +{props.deliveryCost} SEK (incl.VAT)
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export function reachesYou(date){
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
   return ( `${days[date.getDay()]} ${months[date.getMonth()]}
    ${date.getDate()} ${date.getFullYear()}`)
}