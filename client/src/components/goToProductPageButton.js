import React from 'react'
import { Button } from "grommet";

export default function goToProductPageButton(props) {
    return (
        <Button
            size='small'
            margin={{ 'bottom': 'xsmall' }}
            hoverIndicator
            label={'Read more'}
            onClick={props.onClick}
        />

    )
}