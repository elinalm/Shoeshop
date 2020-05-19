import React, { useContext } from 'react'
import CollapsibleNav from '../CollapsibleNav'
import { CartContext } from '../../context/cartContext'
import CheckoutCart from './CheckoutCart'
import { EmptyCart } from './EmptyCart'
import FooterSection from '../Footer'



export default function MyCart() {
    const [cartItems, setCart] = useContext(CartContext)
    let displayPage = <EmptyCart />
    if (cartItems.length > 0) {
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
