import React from 'react'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import ProductView from './ProductView'
import { RouteComponentProps } from 'react-router-dom'
import { ProductConsumer } from '../context/productContext'

// interface Params {
//     id: string
// }

//interface Props extends RouteComponentProps<Params> {}

export default function ProductPage(props) {

    return (
        <>
            <CollapsibleNav showCart={true} showMenu={false} />
            <ProductConsumer>
                {(products) => {
                    const product = products.state.allProducts.find((product) => product._id === (props.match.params.id))
                    console.log(products.state.allProducts)
                    return (
                        <ProductView product={product} />
                    )
                }}
            </ProductConsumer>
            <Footer />
        </>

    )
}
