import React, { useState, useContext } from 'react'
import { Close } from "grommet-icons";
import { ProductContext } from '../context/productContext'
import { Box, Button, Heading, Text, CheckBoxGroup, CheckBox, Form, } from "grommet";
import { FormFieldLabel as FormField } from './FormFieldLabel'

const EditOrAddProduct = (props) => {
    const productValue = useContext(ProductContext)

    const [checked, setChecked] = useState(props.action === 'edit' ? props.product.category : '')
    const [name, setName] = useState(props.action === 'edit' ? props.product.brand : '')
    const [description, setDescription] = useState(props.action === 'edit' ? props.product.description : '')

    const [imageFile, setImageFile] = useState('')
    const [price, setPrice] = useState(props.action === 'edit' ? props.product.price : '')

    const inventoryText = (props.action === 'edit' ? props.product.inventory.map(element => `${element.size}#${element.quantity}`) : '')
    const [newInventory, setNewInventory] = useState(inventoryText.toString())

    const updateProduct = async (event) => {
        let image = props.product.image
        if (imageFile) {
            image = await uploadFile(imageFile)
        }

        props.setOpen(undefined)
        let values = event.value
        values.category = checked

        let inventoryEachItem = values.newInventory.split(',')

        let updatedInventory = inventoryEachItem.map(element => {
            let e = element.split('#')
            return {
                size: e[0],
                quantity: e[1]
            }
        })
        productValue.getDisplayedProducts()
        values.image = image
        values.inventory = updatedInventory
        delete values.newInventory
        productValue.updateProduct(props.product._id, values)
    }

    const uploadFile = async (file) => {

        let fd = new FormData();
        fd.append('image', file);
        try {
            const response = await fetch("http://localhost:5000/image/", {
                method: "POST",
                credentials: "include",
                body: fd
            });
            return response.json()
        }
        catch (error) {
            console.log(error);
        }
    }


    const addProduct = async (event) => {
        props.setOpen(undefined)
        let image = await uploadFile(imageFile)
        let values = event.value
        values.category = checked
        
        let inventoryEachItem = values.newInventory.split(',')
        
        let updatedInventory = inventoryEachItem.map(element => {
            let e = element.split('#')
            return {
                size: e[0],
                quantity: e[1]
            }
        })
        console.log(values)

        values.inventory = updatedInventory
        delete values.newInventory
        values.image = image

        productValue.addProduct(values)
    }
    return (
        <Box
            fill="vertical"
            overflow="auto"
            width="large"
            pad="small"

        >
            <Form onSubmit={props.action === 'edit' ? updateProduct : addProduct}>
                <Box flex={false} direction="row" justify="between" align='center'>
                    <Heading level={4} margin="none">
                        Product Details
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
                    <input type='file' label="image" name='image' direction='row' align='center'
                        accept="image/gif, image/jpeg, image/png"
                        required={props.action === 'edit' ? false : true}
                        onChange={event => setImageFile(event.target.files[0])} />
                    <FormField
                        label="Categories"
                        name="checkboxgroup"
                        htmlFor="check-box-group"
                        required
                    >
                        <CheckBoxGroup
                            direction='row-responsive'
                            gap='small'
                            id="group"
                            name="checkboxgroup"
                            value={checked}
                            options={productValue.state.categories.map(item => item)}
                            onChange={e => setChecked(e.value)}
                        />
                    </FormField>
                </Box>

                <Button
                    type="submit"
                    label="Submit"
                    primary
                />
                <Text margin={{ left: "small" }} size="small" color="status-critical">
                    * Required Field
                </Text>
            </Form>
        </Box>
    )
}

export default EditOrAddProduct
