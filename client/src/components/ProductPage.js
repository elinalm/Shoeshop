import React from 'react'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import ProductView from './ProductView'
import products from './allProducts'
import { RouteComponentProps } from 'react-router-dom'

// interface Params {
//     id: string
// }

//interface Props extends RouteComponentProps<Params> {}

export default function ProductPage(props) {
    
    const product = products.find((product) => product.id === Number(props.match.params.id))

    return (
        <>
            <CollapsibleNav showCart={true} showMenu={false}/>
            <ProductView product={product}/>
            <Footer />
        </>

    )
}
