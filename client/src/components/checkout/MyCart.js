import React, { useContext } from 'react'
import CollapsibleNav from '../CollapsibleNav'
import CheckoutCart from './CheckoutCart'
import { EmptyCart } from './EmptyCart'
import FooterSection from '../Footer'



export default function MyCart() {

    let displayPage = <EmptyCart />
    // if (cartItems.length > 0) {
    //     displayPage = <CheckoutCart />
    // }
    return (
        <>
            <CollapsibleNav showCart={true} showMenu={false} />
            {displayPage}
            <FooterSection />
        </>
    )
}
