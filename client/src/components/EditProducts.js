import React, { useContext, useState } from 'react'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import { DataTable, Text, Box, Meter, CheckBox, FormField, CheckBoxGroup } from 'grommet'
import { ProductConsumer, ProductContext } from '../context/productContext'

const EditProducts = () => {
    const context = useContext(ProductContext)
    const [checked, setChecked] = useState([]);
    const checkboxes = context.state.categories;

    const onCheckAll = event => {
        if (event.target.checked) {
            setChecked(checkboxes);
        } else {
            setChecked([]);
        }
    };

    const onCheck = (event, value) => {
        if (event.target.checked) {
            setChecked([...checked, value]);
        } else {
            setChecked(checked.filter(item => item !== value));
        }
    };

    console.log(context.state.displayedProducts)
    return (
        <>

            <CollapsibleNav showCart={true} showMenu={false} />
            <DataTable
                columns={[
                    {
                        property: 'brand',
                        header: <Text>Brand</Text>,
                        primary: true,
                    },
                    {
                        property: 'price',
                        header: 'Price',

                    },
                    {
                        property: 'category',
                        header: 'Category',
                        render: datum => (
                            datum.category.map(item =>
                                (<CheckBoxGroup
                                    value={value}
                                    onChange={event => {
                                        console.log("value: ", event.value);
                                        console.log("option: ", event.option);
                                        setValue(event.value);
                                    }}
                                    options={["First", "Second", "Third"]}
                                />
                                ))
                        ),
                    },
                    {
                        property: 'description',
                        header: 'Description',

                    },
                    {
                        property: 'image',
                        header: 'Image',
                        render: datum => (
                            <Box pad={{ vertical: 'xsmall' }}>
                                <Meter
                                    values={[{ value: datum.percent }]}
                                    thickness="small"
                                    size="small"
                                />
                            </Box>
                        ),
                    },
                    {
                        property: 'inventory',
                        header: 'Inventory',
                        render: datum => (
                            <Box pad={{ vertical: 'xsmall' }}>
                                <Meter
                                    values={[{ value: datum.percent }]}
                                    thickness="small"
                                    size="small"
                                />
                            </Box>
                        ),
                    },
                ]}
                data={context.state.displayedProducts}
            />
            <Footer />
        </>
    )
}

export default EditProducts