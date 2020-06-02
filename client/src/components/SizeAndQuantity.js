import React, { useContext, useEffect } from "react";
import { Cart } from 'grommet-icons'
import { Box, Text, Select, Button } from "grommet";
import { CartContext } from "../context/cartContext";



export default function SizeAndQuantity(props) {
    const cartValue = useContext(CartContext)
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
        console.log(props.product.inventory)
        for (const inventory of props.product.inventory) {
            if (inventory.size === size) {
                console.log(inventory.quantity, '1')
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
        // console.log(quantityArray);
    };
    return (
        <>
            <Text style={{ textAlign: "justify" }} color="brand">
                {props.product.price} SEK
        </Text>
            <Box color="brand" align="center" justify="center" width ='small' margin='none' gap='small'>
                <Box width ='small' align="center" justify="between" direction='row'>
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
                <Box width ='small' align="center" justify="between" direction='row' gap='medium'>
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

            <Box
                direction="row-responsive"
                margin="medium"
                justify="between"
                align="center"
                gap='large'
            >

                <Button
                    size="small"
                    margin={{ bottom: "xsmall" }}
                    hoverIndicator
                    icon={<Cart />}
                    label={"Add To Cart"}
                    onClick={() =>
                        
                        cartValue.addToCart(props.product._id, props.product.brand, 
                        props.product.price, props.product.img, 
                        size, quantity, quantityArray.length)
                    }
                />
            </Box>
        </>
    )
}
