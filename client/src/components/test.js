import React from 'react'
import { Button } from 'grommet'
import { Up } from 'grommet-icons'

function ScrollToTop() {

    return (
        <Button
            size='small'
            label='Top'
            icon={<Up />} onClick={() => { window.scrollTo(0, 0) }}
        ></Button>
    )
}

export default ScrollToTop
