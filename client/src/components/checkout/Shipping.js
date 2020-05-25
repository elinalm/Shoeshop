import React, { useState } from 'react'
import { Box, RadioButtonGroup, Button } from 'grommet'
import dhlIcon from '../../assets/dhl.png'
import expDhlIcon from '../../assets/dhlExpress.png'
import postnordIcon from '../../assets/postnord.png'
import ShippingOptions from './ShippingOptions'
import { LinkNext } from 'grommet-icons'
import { reachesYou } from './ShippingOptions'
import { CancelButton } from './CancelButton'

// interface Props {
//     ship: any
// }
export default function Shipping(props) {

    const shipPrice = {
        standardPrice: 0,
        quickPrice: 5,
        expressPrice: 10
    }

    Object.freeze(shipPrice)
    const [value, setValue] = useState('d1')

    const orderDate = new Date()
    const expressDate = new Date(orderDate)
    expressDate.setDate(expressDate.getDate() + 1)


    const quickDeliveryDate = new Date(orderDate)
    quickDeliveryDate.setDate(quickDeliveryDate.getDate() + 3)

    const standardDeliveryDate = new Date(orderDate)
    standardDeliveryDate.setDate(standardDeliveryDate.getDate() + 7)


    const getShipPrice = (selected) => {
        let arrivalDate, shipCost
        switch (selected) {
            case 'd1':
                shipCost = (shipPrice.expressPrice)
                arrivalDate = reachesYou(expressDate)

                break;
            case 'd2':
                shipCost = (shipPrice.quickPrice)
                arrivalDate = reachesYou(quickDeliveryDate)
                break;
            case 'd3':
                shipCost = (shipPrice.standardPrice)
                arrivalDate = reachesYou(standardDeliveryDate)
                break;
        }

        return [shipCost, arrivalDate]
    }

    return (

        <Box justify='center' align='center' pad='small' >
            <Box align='center' justify='center'>
                <RadioButtonGroup
                    name="radio"
                    options={[
                        {
                            label: <ShippingOptions
                                deliveryName={'Express'}
                                deliveryIcon={expDhlIcon}
                                deliveryDate={
                                    expressDate
                                }
                                deliveryCost={shipPrice.expressPrice}
                            />, value: "d1"
                        },
                        {
                            label: <ShippingOptions
                                deliveryName={'Quick'}
                                deliveryIcon={dhlIcon}
                                deliveryDate={
                                    quickDeliveryDate
                                }
                                deliveryCost={shipPrice.quickPrice}
                            />, value: "d2"
                        },
                        {
                            label: <ShippingOptions
                                deliveryName={'Standard'}
                                deliveryIcon={postnordIcon}
                                deliveryDate={
                                    standardDeliveryDate
                                }
                                deliveryCost={shipPrice.standardPrice}
                            />, value: "d3"
                        }
                    ]}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </Box>

            <Box direction='row' wrap={true} justify='evenly' margin={{ top: 'small' }} gap='small'>

                <CancelButton />

                <Box animation='pulse'>
                    <Button
                        reverse={true} icon={<LinkNext size='small' />}
                        label="Next" size='small' primary
                        onClick={(e) => { props.ship(getShipPrice(value)) }} />
                </Box>
            </Box>
        </Box>
    )
}
