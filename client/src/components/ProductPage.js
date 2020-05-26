import React, {useEffect, useContext} from 'react'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import ProductView from './ProductView'
import { ProductContext } from '../context/productContext'

// interface Params {
//     id: string
// }

//interface Props extends RouteComponentProps<Params> {}

export default function ProductPage(props) {
    const productValue = useContext(ProductContext)
    useEffect(() => {
        productValue.getDisplayedProducts()

    }, [])

    const product = productValue.state.displayedProducts.find((product) => product._id === (props.match.params.id))
    return (
        <>
            <CollapsibleNav showCart={true} showMenu={false} />       
                        <ProductView product={product} />
            <Footer />
        </>

    )
}
