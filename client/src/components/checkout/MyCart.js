import React, { useContext } from 'react'
import CollapsibleNav from '../CollapsibleNav'
import CheckoutCart from './CheckoutCart'
import { EmptyCart } from './EmptyCart'
import FooterSection from '../Footer'
import { CartContext } from '../../context/cartContext'



export default function MyCart() {
    const cartValue = useContext(CartContext)
    let displayPage = <EmptyCart />
    if (cartValue.state.cart.length > 0) {
        displayPage = <CheckoutCart />
    }
    return (
        <>
            <CollapsibleNav showCart={true} showMenu={false} />
            {displayPage}
            <FooterSection />
        </>
    )
}
