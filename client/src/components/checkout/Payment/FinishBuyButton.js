import React, {useContext} from 'react'
import { Box, Button, Text } from 'grommet'
import { LinkNext } from 'grommet-icons'
import { UserContext } from "../../../context/userContext";

function FinishBuyButton() {
    const userValue = useContext(UserContext)
    return (
        <Box animation='pulse'>
            {userValue.state.loggedInUser ?
                (<Button
                    reverse={true} icon={<LinkNext size='small' />}
                    type="submit" label="Finish Buy" size='small' primary />) :
                (<Text color='status-error'>Login to Checkout</Text>)}
        </Box>
    )
}

export default FinishBuyButton
