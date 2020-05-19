import React, { useState, ReactNode } from 'react'
const initialState = []
export const CartContext = React.createContext(initialState)
// interface Props {
//     children: ReactNode
// }

export const CartProvider = (props) => {
    const [cart, setCart] = useState(() => {
        const initialState = []
        return initialState;
      })

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}