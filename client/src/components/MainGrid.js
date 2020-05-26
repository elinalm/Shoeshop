import React, { useContext } from 'react';
import { Grommet, Box, Grid, ResponsiveContext, Text } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import ProductCard from './productCard';
import {Add} from 'grommet-icons'
import Test from './test'
import { ProductContext } from '../context/productContext'
import { UserContext } from '../context/userContext'

const customBreakpoints = deepMerge(grommet, {
    global: {
        breakpoints: {
            small: {
                value: 650
            },
            medium: {
                value: 1200
            },

        },
        font: {
            family: "'Overlock', cursive;",
        },
        colors: {
            brand: "dark-1",
        },
        heading: {
            extend: "font-family: 'Nunito', sans-serif;",
        },
    }
});

export default function MainGrid() {
    const productValue = useContext(ProductContext)
    const userValue = useContext(UserContext)
    console.log(userValue.state.userRole)
    return (
        <Grommet theme={customBreakpoints}>

            <Box>
                <ResponsiveContext.Consumer>
                    {size => (

                        <Grid

                            columns={size === 'small' ? ['full'] : size === 'medium' ? ["1/3", "1/3", "1/3"] : ["1/4", "1/4", "1/4", "1/4"]}
                        >
                            {
                                productValue.state.displayedProducts.map(item => (
                                    <ProductCard name={item.brand} price={item.price}
                                        key={item._id} img={item.img} id={item._id}
                                        size={item.inventory.map(element => element.size)} />
                                ))

                            }

                            {userValue.state.userRole === 'admin' && (
                                
                                <Box round='small'
                                
                                    pad='small'
                                    elevation="large"
                                    background="light-3"
                                    
                                    justify="center"
                                    align="center"
                                    margin='medium'>
                                    <Text>Add Product </Text>
                                    <Add size="medium"/></Box>
                            )}
                        </Grid>
                    )}
                </ResponsiveContext.Consumer>

            </Box>
        </Grommet>
    );
}