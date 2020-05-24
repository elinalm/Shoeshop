import React from 'react'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import FirstSection from './FirstSection'
import { CheckoutButton } from './CheckoutButton'
import { Box, ResponsiveContext, Text, Menu } from 'grommet'
import { FormDown } from "grommet-icons";

export default function HomePage() {
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
                                    items={[
                                        { label: "Street", onClick: () => { } },
                                        { label: "Summer", onClick: () => { } },
                                        { label: "Summer", onClick: () => { } },
                                        { label: "Summer", onClick: () => { } }
                                    ]}
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
                                                <Text color={color}>Categories</Text>
                                                <FormDown color={color} />
                                            </Box>
                                        );
                                    }}
                                </Menu>
                            </Box>
                            <span style={{ position: 'fixed', right: '1rem', top: '0.5rem' }}>
                                <CheckoutButton showLabel={false} /></span>
                        </>) : (
                            <>
                                <Box margin='small' gap='small' fill justify='around' align='center' direction='row'>
                                    <Text>Sports</Text>
                                    <Text>Street</Text>
                                    <Text>Formal</Text>
                                    <Text>Party</Text>
                                </Box>
                                <span style={{ position: 'fixed', right: '1rem', top: '1.2rem' }}>
                                    <CheckoutButton showLabel={true} /></span>
                            </>
                        )
                }
            </ResponsiveContext.Consumer>
            <FirstSection />
            <MainGrid />
            <Footer />
        </>

    )
}
