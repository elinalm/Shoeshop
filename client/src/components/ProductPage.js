import React, { useEffect, useContext, useState } from 'react'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import ProductView from './ProductView'
import { ProductContext } from '../context/productContext'


export default function ProductPage(props) {
    const productValue = useContext(ProductContext)
    useEffect(() => {
        productValue.getProductDetails(props.match.params.id)
    }, [])    

    return (
        <>
            <CollapsibleNav showCart={true} showMenu={false} />
            {productValue.state.productDetails.length === 0 ? <></> : <ProductView product={productValue.state.productDetails[0]} />}
            <Footer />
        </>

    )
}
