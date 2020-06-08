import React, { useState, useContext } from 'react'
import { Box, Button, Form, Text } from 'grommet'
import { FormFieldLabel as FormField } from '../FormFieldLabel'
import { LinkNext } from 'grommet-icons'
import { CancelButton } from './CancelButton'
import { UserContext } from "../../context/userContext";

export const UserInfo = (props) => {
    const userValue = useContext(UserContext)
    const [name, setName] = useState(props.userInfo.name)
    const [email, setEmail] = useState(props.userInfo.email)
    const [mobNum, setMobNum] = useState(props.userInfo.mobNum)
    const [address, setAddress] = useState(props.userInfo.adr)
    const [address1, setAddress1] = useState(props.userInfo.adr1)
    const [address2, setAddress2] = useState(props.userInfo.adr2)
    return (
        <Box align="center" justify="center" >
            <Form onSubmit={props.SubmitForm}>
                <Box pad='xsmall' direction='row-responsive'>
                    <FormField
                        pad={false} margin='xsmall' label="Name" name="name"
                        value={name}
                        validate={{ regexp: /^[a-zäöå]/i }}
                        required
                        onChange={event => setName(event.target.value)} />
                    <FormField pad={false} margin='xsmall' label="Email" name="email" type="email"
                        value={email}
                        required
                        onChange={event => setEmail(event.target.value)} />
                    <FormField pad={false} margin='xsmall'
                        label="Mobile Number" name="Mobile number" value={mobNum}
                        required
                        validate={{ regexp: /^[0-9]{10}$/, message: '10 digits' }}
                        onChange={event => setMobNum(event.target.value)}
                    />
                </Box>
                <Box pad='xsmall'>
                    <FormField pad={false} margin='none' label="Street Address" name="address"
                        value={address}
                        validate={{ regexp: /^[A-Za-zäöåÄÖÅ0-9 _]*[A-Za-zäöåÄÖÅ0-9][A-Za-zäöåÄÖÅ0-9 _]*$/, message: 'no special characters allowed' }}
                        required
                        onChange={event => setAddress(event.target.value)} />
                </Box>
                <Box pad='xsmall' direction='row-responsive'>
                    <FormField
                        pad={false} margin='xsmall' label="Post Code" name="address1"
                        value={address1}
                        validate={{ regexp: /^[0-9]{5}$/, message: '5 digits' }} required
                        onChange={event => setAddress1(event.target.value)} />
                    <FormField pad={false} margin='xsmall' label="City" name="address2"
                        value={address2}
                        required
                        validate={{ regexp: /^[a-zäöå]/i }}
                        onChange={event => setAddress2(event.target.value)} />
                </Box>

                <Box direction="row" wrap={true} justify='evenly' margin={{ top: 'small' }} gap='small'>
                    <CancelButton />
                    <Box animation='pulse'>
                        {userValue.state.loggedInUser ? (<Button
                            reverse={true} icon={<LinkNext size='small' />}
                            type="submit" label="Next" size='small' alignSelf='center' primary />) :
                            (<Text color='status-error'>Login to Checkout</Text>)}
                    </Box>
                    <Text margin={{ left: "small" }} size="small" color="status-critical">
                        * Required Field
                    </Text>
                </Box>
            </Form>
        </Box>
    )
}
