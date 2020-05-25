import React from 'react'
import { Cart } from 'grommet-icons'
import { Button } from "grommet";

export default function AddToCartButton(props) {
    return (
        <Button
            size='small'
            margin={{ 'bottom': 'xsmall' }}
            hoverIndicator
            icon={<Cart />}
            label={'Add To Cart'}
            onClick={props.onClick}
        />

    )
}
