import React from 'react';
import { Grommet, Box, Heading, Nav } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { ResponsiveGrid } from "./ResponsiveGrid";
import products, { Product } from './allProducts'
import ProductCard from './productCard';
import Test from './test'

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
            brand: "neutral-3",
        },
        heading: {
            extend: "font-family: 'Nunito', sans-serif;",
        },
    }
});

export default function MainGrid() {
    const categories = {}

    for (const product of products) {
        const category = categories[product.category]
        // Init empty category array if not yet present
        if (!category) {
            categories[product.category] = []
        }

        // Add product to category array
        categories[product.category].push(product)
    }
    console.log(categories)

    return (
        <Grommet theme={customBreakpoints}>
            {Object.keys(categories).map((name) => {
                const products = categories[name]
                return (
                    <Box>
                        <Nav direction="row" background="brand" height='40px' align='center' justify='center'>

                            <Heading id={name}>
                                {name.toUpperCase()}
                            </Heading>

                            <Box>
                                <Test />
                            </Box>
                        </Nav>

                        <ResponsiveGrid
                            gap="medium"
                            margin="medium"
                            columns="medium"
                            rows="xsmall"
                        >
                            {
                                products.map(item => (
                                    <ProductCard name={item.name} id={item.id} price={item.price} key={item.id} img={item.img} />
                                ))
                            }
                        </ResponsiveGrid>
                    </Box>
                )
            })}
        </Grommet>
    );
}