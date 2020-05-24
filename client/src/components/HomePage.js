import React from 'react'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import FirstSection from './FirstSection'
import { CheckoutButton } from './CheckoutButton'
import { Box, ResponsiveContext, Text, Menu } from 'grommet'
import { FormDown } from "grommet-icons";
import { ProductConsumer } from '../context/productContext'

export default function HomePage() {
    return (
        <>
            <CollapsibleNav showCart={false} showMenu={true} />
            <ProductConsumer>
                {(products) => {
                    {/* console.log(products.state.categories) */ }
                    return (

                        <ResponsiveContext.Consumer>
                            {responsive =>
                                responsive === "small" ? (
                                    <>
                                        <Box
                                            align="center"
                                            background='brand'
                                        >
                                            <Menu
                                                plain
                                                items={
                                                    products.state.categories.map(item =>
                                                        ({ label: item, onClick: () => { products.getDisplayedProducts(item) } }))
                                                }
                                            >
                                                {({ drop, hover }) => {
                                                    const color = hover && !drop ? "accent-1" : undefined;
                                                    return (
                                                        <Box
                                                            direction="row"
                                                            gap="small"
                                                            pad="small"
                                                            background={hover && drop ? "light-2" : undefined}
                                                        >
                                                            <Text color={color}>actions</Text>
                                                            <FormDown color={color} />
                                                        </Box>
                                                    );
                                                }}
                                            </Menu>
                                        </Box>
                                        <span style={{ position: 'fixed', right: '1rem', top: '0.5rem', zIndex: 1 }}>
                                            <CheckoutButton showLabel={false} /></span>
                                    </>) : (
                                        <>
                                            <Box margin='small' gap='small' fill justify='around' align='center' direction='row'>
                                                {
                                                    products.state.categories.map(item => (
                                                        <Text onClick={() => {
                                                            products.getDisplayedProducts(item)
                                                        }}>{item}</Text>
                                                    ))
                                                }
                                            </Box>
                                            <span style={{ position: 'fixed', right: '1rem', top: '1.2rem', zIndex: 1 }}>
                                                <CheckoutButton showLabel={true} /></span>
                                        </>
                                    )
                            }
                        </ResponsiveContext.Consumer>


                    )
                }
                }
            </ProductConsumer>
            <FirstSection />
            <MainGrid category={'all'} />
            <Footer />
        </>

    )
}
