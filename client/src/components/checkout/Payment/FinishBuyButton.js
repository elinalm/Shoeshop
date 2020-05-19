import React from 'react'
import { Box, Button } from 'grommet'
import { LinkNext } from 'grommet-icons'

function FinishBuyButton() {
    return (
        <Box animation='pulse'>
            <Button
                reverse={true} icon={<LinkNext size='small' />}
                type="submit" label="Finish Buy" size='small' primary />
        </Box>
    )
}

export default FinishBuyButton
