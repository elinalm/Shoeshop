import React, { useEffect, useContext } from 'react'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import FirstSection from './FirstSection'
import { CheckoutButton } from './CheckoutButton'
import { Box, ResponsiveContext, Text, Menu, Image} from 'grommet'
import { FormDown } from "grommet-icons";
import { ProductContext } from '../context/productContext'
import { Link } from 'react-router-dom'

export default function HomePage(props) {
    const productValue = useContext(ProductContext)


    useEffect(() => {
        productValue.getDisplayedProducts(props.match.params.category)
    }, [props.location.pathname])

return (
    <>
        <CollapsibleNav showCart={false} showMenu={true} />
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
                                    productValue.state.categories.map(item =>

                                        (
                                            { label: <Link to={`/${item}`}>{item}</Link> }
                                        ))
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
                                            <Text color={color}>categories</Text>
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
                                    productValue.state.categories.map(item => (
                                        <Link to={`/${item}`}>
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
        <FirstSection />
        {/* <Image src='http://localhost:5000/image/5ed8ddbf2f035a7d41701077'/> */}
        <MainGrid />
        <Footer />
    </>

)
}
