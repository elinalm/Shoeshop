import React, { useState } from 'react'
import { Add, Close } from "grommet-icons";

import {
    Box,
    Button,
    FormField,
    Grommet,
    Heading,
    Layer,
    Select,
    TextArea,
    TextInput,
    checkBoxGroup,
    Form,

} from "grommet";

const EditProduct = (props) => {
    const [select, setSelect] = useState("");

    return (
        <Box
            as="form"
            fill="vertical"
            overflow="auto"
            width="medium"
            pad="small"
            onSubmit={props.close}
        >
            <Form onSubmit={() => { }}>
                <Box flex={false} direction="row" justify="between">
                    <Heading level={2} margin="none">
                        Edit Product
                </Heading>
                    <Button icon={<Close />} onClick={props.close} />
                </Box>
                <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                    <Box pad='xsmall' direction='row'>
                        <FormField label="brand"  direction='row' align='center'
                            name='brand'
                            pad={false} margin='none'
                            required
                            value='test'
                        />
                    </Box>
                    <FormField label="price"
                        validate={{ regexp: /^[0-9]/, message: 'must be a number' }} />
                    <FormField label="description" />
                    <FormField label="img" direction='row' align='center' />
                    <FormField
                        label="Where would you like to visit"
                        name="checkboxgroup"
                        htmlFor="check-box-group"
                        required
                    >
                        <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
                            <checkBoxGroup
                                id="group"
                                name="checkboxgroup"
                                options={["Maui", "Jerusalem", "Wuhan"]}
                            />
                        </Box>
                    </FormField>
                    <FormField label="" direction='row' align='center'>
                        <Select
                            options={[
                                "one",
                                "two",
                                "three",
                                "four",
                                "five",
                                "six",
                                "seven",
                                "eight"
                            ]}
                            value={select}
                            onSearch={() => { }}
                            onChange={({ option }) => setSelect(option)}
                        />
                    </FormField>
                    <FormField label="Third">
                        <TextArea />
                    </FormField>
                </Box>
                <Box flex={false} as="footer" align="start">
                    <Button
                        type="submit"
                        label="Submit"
                        onClick={props.close}
                        primary
                    />
                </Box>

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