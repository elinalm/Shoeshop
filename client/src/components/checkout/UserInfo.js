import React from 'react'
import { Box, Button, Form, FormField } from 'grommet'
import { LinkNext } from 'grommet-icons'
import { CancelButton } from './CancelButton'
// interface Props {
//     userInfo: {
//         name: string,
//         email: string,
//         mobNum: number,
//         adr: string,
//         adr1: number,
//         adr2: string,
//     }
//     SubmitForm: (((event: React.FormEvent<Element>) => void) & ((event: React.FormEvent<HTMLFormElement>) => void))
// }
export const UserInfo = (props) => {
    return (
        <Box align="center" justify="center" >
            <Form onSubmit={props.SubmitForm}>
                <Box pad='xsmall' direction='row-responsive'>
                    <FormField
                        pad={false} margin='xsmall' label="Name" name="name"
                        value={props.userInfo.name}
                        validate={{ regexp: /^[a-z]/i }}
                        required
                        onClick={(e) => (e.currentTarget.value = '')} />
                    <FormField pad={false} margin='xsmall' label="Email" name="email" type="email"
                        value={props.userInfo.email}
                        required
                        onClick={(e) => (e.currentTarget.value = '')} />
                    <FormField pad={false} margin='xsmall'
                        label="Mobile Number" name="Mobile number" value={props.userInfo.mobNum}
                        required
                        validate={{ regexp: /^[0-9]{10}$/, message: '10 digits' }}
                        onClick={(e) => (e.currentTarget.value = '')}
                    />
                </Box>
                <Box pad='xsmall'>
                    <FormField pad={false} margin='none' label="Street Address" name="address"
                        value={props.userInfo.adr}
                        validate={{ regexp: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/, message: 'no special characters allowed' }}
                        required
                        onClick={(e) => (e.currentTarget.value = '')} />
                </Box>
                <Box pad='xsmall' direction='row-responsive'>
                    <FormField
                        pad={false} margin='xsmall' label="Post Code" name="address1"
                        value={props.userInfo.adr1}
                        validate={{ regexp: /^[0-9]{5}$/, message: '5 digits' }} required
                        onClick={(e) => (e.currentTarget.value = '')} />
                    <FormField pad={false} margin='xsmall' label="City" name="address2"
                        value={props.userInfo.adr2}
                        required
                        validate={{ regexp: /^[a-z]/i }}
                        onClick={(e) => (e.currentTarget.value = '')} />
                </Box>

                <Box direction="row" wrap={true} justify='evenly' margin={{ top: 'small' }} gap='small'>
                    <CancelButton />
                    <Box animation='pulse'>
                        <Button
                            reverse={true} icon={<LinkNext size='small' />}
                            type="submit" label="Next" size='small' alignSelf='center' primary />
                    </Box>
                </Box>
            </Form>
        </Box>
    )
}
