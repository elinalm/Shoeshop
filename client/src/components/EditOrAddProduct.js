import React, { useState, useContext } from 'react'
import { Close } from "grommet-icons";
import { ProductContext } from '../context/productContext'
import { Box, Button, FormField, Heading, Text, CheckBox, Form, } from "grommet";

const EditOrAddProduct = (props) => {
    const productValue = useContext(ProductContext)

    const [checked, setChecked] = useState(props.action === 'edit' ? props.product.category : '')
    const [name, setName] = useState(props.action === 'edit' ? props.product.brand : '')
    const [description, setDescription] = useState(props.action === 'edit' ? props.product.description : '')
    const [img, setImg] = useState(props.action === 'edit' ? props.product.img : '')
    const [imgPath, setImgPath] = useState('')
    const [price, setPrice] = useState(props.action === 'edit' ? props.product.price : '')
    const [id, setId] = useState(props.action === 'edit' ? props.product._id : '')
    const inventoryText = (props.action === 'edit' ? props.product.inventory.map(element => `${element.size}#${element.quantity}`) : '')

    
    const [newInventory, setNewInventory] = useState(inventoryText.toString())

    const onCheck = (event, value) => {
        if (event.target.checked) {
            setChecked([...checked, value]);
        } else {
            setChecked(checked.filter(item => item !== value));
        }
    }

    const updateProduct = async (event) => {
        console.log(imgPath)
        // uploadFile()
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
        values.inventory = updatedInventory
        delete values.newInventory
        productValue.updateProduct(props.product._id, values)
    }

    const uploadFile = async (file) => {
        console.log(file)

        let fd = new FormData();
        fd.append('image', file);

        console.log(fd)
        try {
            const response = await fetch(`http://localhost:5000/image/`, {
                method: "POST",
                credentials: "include",
                body: fd
            });
            if(response.status === 200) {
                let res = response.json()
                console.log("response",res)
                setImgPath("test")
            } else {

            }
         
        }
        catch (error) {
            console.log(error);
        }
    }


    const addProduct = async (event) => {
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

        values.inventory = updatedInventory
        delete values.newInventory
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
                    {/* <FormField label="Image Url" name='img' direction='row' align='center'
                        required
                        value={img}
                        onChange={event => setImg(event.target.value)} /> */}
                    <input type='file' label="Image Path" name='imgPath' direction='row' align='center'
                        onChange={event => uploadFile(event.target.files[0])}/>
                    <Text>Categories</Text>
                    <FormField name="categories">
                        <Box direction='row-responsive' gap='small'>
                            {productValue.state.categories.map(item => (
                                <CheckBox
                                    key={item}
                                    id={item}
                                    checked={checked.includes(item)}
                                    label={item}
                                    onChange={e => onCheck(e, item)}
                                />
                            ))}
                        </Box>
                    </FormField>
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

export default EditOrAddProduct
