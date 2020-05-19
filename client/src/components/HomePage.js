import React from 'react'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import FirstSection from './FirstSection'
import { CheckoutButton } from './CheckoutButton'
import { Box, ResponsiveContext } from 'grommet'

export default function HomePage() {
    return (
        <>
            <CollapsibleNav showCart={false} showMenu={true} />
            <ResponsiveContext.Consumer>
                {responsive =>
                    responsive === "small" ? (
                        <Box border={{ color: 'accent-1', size: 'medium' }} background='brand' round='small' style={{ position: 'fixed', right: '1rem', top: '5rem' }}>
                            <CheckoutButton showLabel={false} /></Box>) : (
                            <Box  border={{ color: 'accent-1', size: 'medium' }} background='brand' round='small' style={{ position: 'fixed', right: '1rem', top: '1.2rem' }}>
                                <CheckoutButton showLabel={true} /></Box>
                        )}
            </ResponsiveContext.Consumer>
            <FirstSection />
            <MainGrid />
            <Footer />
        </>

    )
}
