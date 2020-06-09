import React, { useContext, useEffect } from "react";
import { Cart } from 'grommet-icons'
import { Box, Text, Select, Button } from "grommet";
import { CartContext } from "../context/cartContext";
import { UserContext } from "../context/userContext";

export default function SizeAndQuantity(props) {
    const cartValue = useContext(CartContext)
    const userValue = useContext(UserContext)
    const [size, setSize] = React.useState(props.product.inventory[0].size);
    const [quantity, setQuantity] = React.useState(1);
    const [quantityArray, setQuantityArray] = React.useState([]);

    useEffect(() => {
        maxQuantityArrayOfSize()
    }, [])

    useEffect(() => {
        maxQuantityOfSize()
    }, [size])

    const maxQuantityOfSize = () => {
        for (const inventory of props.product.inventory) {
            if (inventory.size === size) {
                maxQuantityArrayOfSize(inventory.quantity)
            }
        }
    };

        const maxQuantityArrayOfSize = (maxQuantity) => {
            let displayArray = [];
            for (let i = 0; i < maxQuantity; i++) {
                displayArray.push(i + 1);
            }
            setQuantityArray(displayArray);

        };

    return (
        <>
            <Text style={{ textAlign: "justify" }} color="brand">
                {props.product.price} SEK
        </Text>
            <Box color="brand" align="center" justify="center" width='small' margin='none'>
                <Box width='small' align="center" justify="between" direction='row'>
                    <Text>Size:</Text>
                    <Select
                        plain={true}
                        name="size"
                        placeholder="Size"
                        options={props.product.inventory.map((element) => element.size)}
                        value={size}
                        onChange={({ option }) => {
                            setSize(option);
                        }}
                    />
                </Box>
                <Box width='small' align="center" justify="between" direction='row'>
                    <Text>Qty:</Text>
                    <Select
                        plain={true}
                        name="quantity"
                        placeholder="Quantity"
                        options={quantityArray}
                        value={quantity}
                        onChange={({ option }) => { setQuantity(option) }}
                    />
                </Box>
            </Box>
            <Button
                size="small"
                margin='small'
                hoverIndicator
                icon={<Cart />}
                label={"Add To Cart"}
                disabled={userValue.state.loggedInUser ? false : true}
                onClick={() =>
                    cartValue.addToCart(props.product, size, quantity, quantityArray.length)
                }
            />

        </>
    )
}
