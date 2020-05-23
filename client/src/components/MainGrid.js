import React from 'react';
import { Grommet, Box, Heading, Nav } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { ResponsiveGrid } from "./ResponsiveGrid";
import ProductCard from './productCard';
import Test from './test'
import { ProductConsumer } from '../context/productContext'

const customBreakpoints = deepMerge(grommet, {
    global: {
        breakpoints: {
            small: {
                value: 600
            },
            medium: {
                value: 900
            },
            large: 3000
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
    const categories = {}

    // for (const product of products) {
    //     const category = categories[product.category]
    //     // Init empty category array if not yet present
    //     if (!category) {
    //         categories[product.category] = []
    //     }

    //     // Add product to category array
    //     categories[product.category].push(product)
    // }
    // console.log(categories)

    return (
        <Grommet theme={customBreakpoints}>
            <ProductConsumer>
                {(products) => (
                    
                    <Box>
                     
                        <ResponsiveGrid
                            gap="medium"
                            margin="medium"
                            columns="medium"
                            rows="xsmall"
                        >
                            {
                                products.state.allProducts.map(item => (
                                   
                                    <ProductCard name={item.brand} price={item.price} key={item._id} img={item.img} /> // if its admin map something else
                                ))
                            }
                        </ResponsiveGrid>
                    </Box>
                )}
        </ProductConsumer>
        </Grommet>
    );
}