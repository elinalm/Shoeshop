import React from 'react';
import { Grommet, Box,Grid, ResponsiveContext } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import ProductCard from './productCard';
import Test from './test'
import { ProductConsumer } from '../context/productContext'

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
    return (
        <Grommet theme={customBreakpoints}>
            <ProductConsumer>
                {(products) => {
                    return (
                        <Box>
                            <ResponsiveContext.Consumer>
                                {size => (

                                    <Grid
                                   
                                        columns={size === 'small' ? ['full'] : size=== 'medium' ? ["1/3", "1/3", "1/3"] : ["1/4", "1/4", "1/4", "1/4"]}
                                    >
                                       {
                                    products.state.displayedProducts.map(item => (
                                        <ProductCard name={item.brand} price={item.price}
                                            key={item._id} img={item.img} id={item._id}
                                            size={item.inventory.map(element => element.size)} /> // if its admin map something else
                                    ))
                                } 
                                    </Grid>
                                )}
                            </ResponsiveContext.Consumer>
                          
                        </Box>
                    )
                }
                }
            </ProductConsumer>
        </Grommet>
    );
}