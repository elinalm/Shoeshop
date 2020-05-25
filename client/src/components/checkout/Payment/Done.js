import React from "react";
import { Grid, ResponsiveContext, Grommet, Box, Button, Image, Heading, Text, Layer } from "grommet";
import { LinkNext, } from "grommet-icons";
import { Link } from 'react-router-dom'
import SuccessPurchase from '../../../assets/successful_purchase.svg'

// interface Props {
//     arrivalDate: React.ReactNode
//     cartHistory: {
//         totalItems: number;
//         orderTotal: number;
//         arrivalDate: string;
//     }

// }
const getUuid = (a)=> (
    (a ? ((Number(a) ^ Math.random() * 16) >> Number(a) / 4).toString(16)
        : (`${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`).replace(/[018]/g, getUuid))
);

let orderNumber = getUuid()
function Done(props) {
    
    const [open, setOpen] = React.useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <Box justify='center' alignSelf='center' align='center' direction='row' wrap='reverse'>
            <Box pad={{ top: 'small' }}>
                <Image src={SuccessPurchase} />
            </Box>
            <Box pad='medium' gap='medium'>
                <Box align='center' justify='center'>
                    <Heading margin='none' textAlign='center' level={2}>Thanks! You're All Set </Heading>
                    <Link to='/HomePage'>
                        <Button
                            primary
                            reverse={true}
                            icon={<LinkNext />}
                            label='Continue Shopping '
                            margin='small'
                        />
                    </Link>
                </Box>
                <Text>Your order
                <Text onClick={onOpen} color='brand'> {orderNumber} </Text>
                    {open && (
                        <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
                            <Box pad="medium" gap="small" width="medium">
                                <Text>{orderNumber}</Text>
                                <Text>You ordered:{props.cartHistory.totalItems} items</Text>
                                <Text>You Paid:{props.cartHistory.orderTotal} SEK</Text>
                                <Text>Reaches you:{props.cartHistory.arrivalDate} </Text>
                                <Box
                                    gap="small"
                                    direction="row"
                                    align="center"
                                    justify='center'
                                    pad={{ top: "small", bottom: "small" }}
                                >
                                    <Button
                                        label={
                                            <Text color="white">
                                                <strong>Close</strong>
                                            </Text>
                                        }
                                        onClick={onClose}
                                        primary
                                        color="status-critical"
                                    />
                                </Box>
                            </Box>
                        </Layer>
                    )}
                 will reach you on <Text color='brand' weight='bold'>{props.arrivalDate} </Text></Text>
            </Box>
        </Box>
    )
}

export default Done
