import React, {useEffect, useContext} from 'react'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import FirstSection from './FirstSection'
import { CheckoutButton } from './CheckoutButton'
import { Box, ResponsiveContext, Text, Menu } from 'grommet'
import { FormDown } from "grommet-icons";
import { ProductConsumer , ProductContext} from '../context/productContext'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function CategoryPage(props) {
    const location = useLocation()
    console.log(location)
    const category = props.match.params.category
    console.log(category)
    const context = useContext(ProductContext)
    console.log(context)
useEffect(() => {
   context.getDisplayCategories(category)
    const currentPath = location.pathname;
    const searchParams = new URLSearchParams(location.search);
}, [location.pathname])


    return (
        <>
            <CollapsibleNav showCart={false} showMenu={true} />
            <ProductConsumer>
                {(products) => {
                   
                   
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
                                                        <Link to={`/category/${item}/`}>
                                                            <Text>{item}</Text>
                                                        </Link>
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
            <MainGrid category={category}/>
            <Footer />
        </>

    )
}
