import React, { useState, useContext } from 'react'
import { Box, RadioButtonGroup, Button } from 'grommet'
import dhlIcon from '../../assets/dhl.png'
import expDhlIcon from '../../assets/dhlExpress.png'
import postnordIcon from '../../assets/postnord.png'
import ShippingOptions from './ShippingOptions'
import { LinkNext } from 'grommet-icons'
import { reachesYou } from './ShippingOptions'
import { CancelButton } from './CancelButton'
import { CartContext } from '../../context/cartContext'

// interface Props {
//     ship: any
// }
export default function Shipping(props) {
    const cartValue = useContext(CartContext)

    const shipPrice = {
        standardPrice: 0,
        quickPrice: 5,
        expressPrice: 10
    }

    console.log(cartValue.state.shippingDetails)

    Object.freeze(shipPrice)
    const [value, setValue] = useState('d1')

    Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    var date = new Date();

    const orderDate = (days) => {
        const orderDate = new Date()
        const deliveryDate = new Date(orderDate)
        deliveryDate.setDate(deliveryDate.getDate() + days)
        return deliveryDate
    }

  
    const getSelectedMethod = (selected) => {
    
        const selectedMethod = cartValue.state.shippingDetails.find(element => element._id === selected)
        const arrivalDate = reachesYou(orderDate(selectedMethod.deliveryDays))

        return [selectedMethod.price, arrivalDate, selectedMethod]
    }

    return (

        <Box justify='center' align='center' pad='small' >
            <Box align='center' justify='center'>
                <RadioButtonGroup
                    name="radio"
                    options={cartValue.state.shippingDetails.map(element => ({
                        
                            label: <ShippingOptions
                                deliveryName={element.company}
                                deliveryDate={orderDate(element.deliveryDays)}
                                deliveryCost={element.price}
                            />, value: `${element._id}`
                        
                    }))}
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
                        onClick={(e) => {props.ship(getSelectedMethod(value))  }} />
                </Box>
            </Box>
        </Box>
    )
}
