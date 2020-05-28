import React, { useState, useContext } from 'react'
import { Add, Close } from "grommet-icons";
import { ProductContext } from '../context/productContext'
import {
    Box,
    Button,
    FormField,
    Grommet,
    Heading,
    Layer,
    Select,
    TextArea,
    Text,
    CheckBox,
    Form,

} from "grommet";

const EditProduct = (props) => {
    const productValue = useContext(ProductContext)
    const [checked, setChecked] = useState(props.category)
    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState(props.description)
    const [img, setImg] = useState(props.img)
    const [price, setPrice] = useState(props.price)

    const inventoryText = props.inventory.map(element => `${element.size}#${element.quantity}`)

    const [newInventory, setNewInventory] = useState(inventoryText.toString())

    const onCheck = (event, value) => {
        if (event.target.checked) {
            setChecked([...checked, value]);
        } else {
            setChecked(checked.filter(item => item !== value));
        }
    }

    const updateProduct = (event) => {
        props.setOpen(undefined)
        let values = event.value
        values.category = checked

        let inventoryEachItem = values.newInventory.split(',')
        console.log(inventoryEachItem)

        let updatedInventory = inventoryEachItem.map(element=> {
            let e = element.split('#')
            return {
                size : e[0],
            quantity : e[1]
            }
        })     
        values.inventory = updatedInventory

        console.log(props.id)
        productValue.updateProduct(props.id, values)       
    }
    return (
        <Box
            fill="vertical"
            overflow="auto"
            width="large"
            pad="small"

        >
            <Form onSubmit={updateProduct}>
                <Box flex={false} direction="row" justify="between" align='center'>
                    <Heading level={4} margin="none">
                        Edit Product
                    </Heading>
                    <Button icon={<Close size='small' />} onClick={props.close} />
                </Box>
                <Box flex="grow" overflow="auto" pad={{ vertical: "small" }}>
                    <Box direction='row-responsive'>
                        <FormField label="Brand" name='brand' pad={false} margin='xsmall'
                            required
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                        <FormField label="Price (SEK)" name='price' pad={false} margin='xsmall'
                            required
                            value={price}
                            onChange={event => setPrice(event.target.value)}
                            validate={{ regexp: /^[0-9]/, message: 'must be a number' }}
                        />
                    </Box>
                    <FormField label="Description" name='description' required
                        pad={false} margin='xsmall'
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <FormField label="Inventory" name='newInventory' required
                        pad={false} margin='xsmall'
                        info="Format: size1#quantity1,size2#quantity2"
                        value={newInventory}
                        onChange={event => setNewInventory(event.target.value)}

                    />
                    <FormField label="Image Url" name='img' direction='row' align='center'
                        value={img}
                        onChange={event => setImg(event.target.value)} />
                    <Text>Categories</Text>
                    <Box direction='row-responsive' gap='small'>
                        <FormField name="categories">
                            {productValue.state.categories.map(item => (
                                <CheckBox
                                    key={item}
                                    id={item}
                                    checked={checked.includes(item)}
                                    label={item}
                                    onChange={e => onCheck(e, item)}
                                />
                            ))}
                            </FormField>
                    </Box>
                    </Box>

                    <Button
                        type="submit"
                        label="Submit"
                        primary
                    />

            </Form>
        </Box>
    )
}

export default EditProduct

// {
//     "brand" : "D shoe",
//     "category": [
//       "party",
//       "summer"
//     ],
//     "price": 299,
//     "description": "Mid 1990's Robert Parish Game Worn, Signed Shoes",
//     "img": "https://dyn1.heritagestatic.com/lf?set=path%5B1%2F1%2F2%2F4%2F1%2F11241871%5D&call=url%5Bfile%3Aproduct.chain%5D",
//     "inventory":
//       [{"size": 43, "quantity": 10},
//       {"size": 44, "quantity": 10}]
//   }