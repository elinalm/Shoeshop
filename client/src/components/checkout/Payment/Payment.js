import React, { useState } from "react"
import { Accordion, AccordionPanel, Box, Grommet, Text, FormField, Form } from "grommet"
import { theme } from '../../../index'
import CardDetails from "./CardDetails"
import FinishBuyButton from "./FinishBuyButton"

const renderPanelHeader = (title, active) => (
    <Box direction="row" align="center" pad="medium" gap="small">
        <strong>
            <Text>{title}</Text>
        </strong>
        <Text color="brand">{active ? "-" : "+"}</Text>
    </Box>
)
// interface Props {
//     userSnap: { name: string; mobNum: number; email: string }
//     SubmitForm: (((event: React.FormEvent<Element>) => void) & ((event: React.FormEvent<HTMLFormElement>) => void))
// }
export const Payment = (props) => {
    const [activeIndex, setActiveIndex] = useState([0]);
    return (
        <Grommet theme={theme}>
            <Accordion
                activeIndex={activeIndex}
                onActive={newActiveIndex => setActiveIndex(newActiveIndex)}
            >
                <AccordionPanel
                    header={renderPanelHeader("Card", activeIndex.includes(0))}
                >
                    <Box pad="medium" >
                        <CardDetails userName={props.userSnap.name} SubmitForm={props.SubmitForm} />
                    </Box>
                </AccordionPanel>
                <AccordionPanel
                    header={renderPanelHeader("Swish", activeIndex.includes(1))}
                >
                    <Form id='Swish' onSubmit={props.SubmitForm}>
                        <Box pad='small' direction='row' wrap={true} align='center'>
                            <Box direction='row' justify='evenly' align='center'>
                                <Text >Mobile Num : </Text>
                                <FormField pad={false} margin='xsmall'
                                    name="Mobile Num" value={props.userSnap.mobNum}
                                    validate={{ regexp: /^[0-9]{10}$/, message: '10 digits' }}
                                    onClick={(e) => (e.currentTarget.value = '')}
                                />
                                
                            </Box>
                            <Box pad='small'>
                                <FinishBuyButton />
                            </Box>
                        </Box>
                    </Form>
                </AccordionPanel>
                <AccordionPanel
                    header={renderPanelHeader("Invoice", activeIndex.includes(2))}
                >
                    <Box direction='row' align='center' >
                        <Form id='invoice' onSubmit={props.SubmitForm}>
                            <Box direction='row' wrap={true} align='center' >
                                <Box pad='small' justify='start' wrap={true} direction='row' align='center' >
                                    <Text >Invoice will be sent to:</Text>
                                    <FormField name="email" type="email" value={props.userSnap.email} required />
                                </Box>
                                <Box pad='small'>
                                    <FinishBuyButton />
                                </Box>
                            </Box>
                        </Form>
                    </Box>
                </AccordionPanel>
            </Accordion>
        </Grommet>
    )
}
