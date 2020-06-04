import React, { useState } from 'react'
import { Form, Box, FormField, Text, MaskedInput } from 'grommet'
import FinishBuyButton from './FinishBuyButton'
// interface Props {
//     userName: string
//     SubmitForm: (((event: React.FormEvent<Element>) => void) & ((event: React.FormEvent<HTMLFormElement>) => void)) | undefined
// }
function CardDetails(props) {
    const [value, setValue] = useState("")
    const [dateValue, setDateValue] = useState("")
    const [cvvValue, setCvvValue] = useState("")
    return (
        <Form id='card' onSubmit={props.SubmitForm}>
            <Box direction='row' wrap={true} align='center'>
                <Box>
                    <Text>Name</Text>
                    <FormField
                        pad={false} margin='xsmall' name="name" validate={{ regexp: /^[a-z]/i }} required
                        value={props.userName} />
                </Box>
                <Box direction='row' align='center'>
                    <Box>
                        Card number
                        <MaskedInput
                            mask={[
                                {
                                    length: 4,
                                    regexp: /^[0-9]{1,4}$/,
                                    placeholder: "xxxx"
                                },
                                { fixed: " " },
                                {
                                    length: 4,
                                    regexp: /^[0-9]{1,4}$/,
                                    placeholder: "xxxx"
                                },
                                { fixed: " " },
                                {
                                    length: 4,
                                    regexp: /^[0-9]{1,4}$/,
                                    placeholder: "xxxx"
                                },
                                { fixed: " " },
                                {
                                    length: 4,
                                    regexp: /^[0-9]{1,4}$/,
                                    placeholder: "xxxx"
                                }
                            ]}
                            value={value}
                            onChange={event => setValue(event.target.value)}
                            required
                        />
                    </Box>
                    <Box pad='small' width='xsmall'>
                        CVV
                        <MaskedInput
                            mask={[
                                {
                                    length: 3,
                                    regexp: /^[0-9]{1,3}$/,
                                    placeholder: "xxx"
                                },
                            ]}
                            value={cvvValue}
                            onChange={event => setCvvValue(event.target.value)}
                            required
                        />
                    </Box>
                    <Box pad='small' width='small'>
                        Exp Date
                        <MaskedInput
                            mask={[
                                {
                                    length: [1, 2],
                                    options: Array.from({ length: 12 }, (v, k) => k + 1),
                                    regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                                    placeholder: "mm"
                                },
                                { fixed: "/" },
                                {
                                    length: 4,
                                    options: Array.from({ length: 50 }, (v, k) => 2020 + k),
                                    regexp: /^[1-2]$|^19$|^20$|^19[0-9]$|^20[0-9]$|^19[0-9][0-9]$|^20[0-9][0-9]$/,
                                    placeholder: "yyyy"
                                }
                            ]}
                            value={dateValue}
                            onChange={event => setDateValue(event.target.value)}
                            required
                        />
                    </Box>
                </Box>
                <Box>
                    <FinishBuyButton />
                </Box>
            </Box>
        </Form>
    )
}

export default CardDetails