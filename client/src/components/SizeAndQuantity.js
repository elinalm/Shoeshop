import React, { useContext, useEffect } from "react";
import { Cart } from 'grommet-icons'
import { Box, Text, Select, Button } from "grommet";
import { CartContext } from "../context/cartContext";
import { UserContext } from "../context/userContext";
import { ProductContext } from "../context/productContext";

export default function SizeAndQuantity(props) {
    const cartValue = useContext(CartContext)
    const userValue = useContext(UserContext)
    const productValue = useContext(ProductContext)
    const [size, setSize] = React.useState(props.product.inventory[0].size);
    const [quantity, setQuantity] = React.useState(1);
    const [quantityArray, setQuantityArray] = React.useState([]);

    useEffect(() => {
        maxQuantityArrayOfSize()
    }, [])

    useEffect(() => {
        maxQuantityOfSize()
    }, [size, productValue.state.displayedProducts])

    const maxQuantityOfSize = () => {
        for (const inventory of props.product.inventory) {
            if (inventory.size === size) {
                if (inventory.quantity === 0) return setQuantity(0)
                maxQuantityArrayOfSize(inventory.quantity)
                setQuantity(1)
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
                        placeholder="No Stock :("
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
                disabled={userValue.state.loggedInUser && userValue.state.userRole === "customer" ? false : true}
                onClick={() => {
                    if (quantity === 0) return alert('Sorry we are out of stock')
                    cartValue.addToCart(props.product, size, quantity, quantityArray.length)
                }
                }
            />

        </>
    )
}