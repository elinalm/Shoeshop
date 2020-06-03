import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import MyCart from './components/checkout/MyCart';
import HomePage from './components/HomePage';
import Checkout from './components/checkout/Checkout';
import ProductPage from './components/ProductPage';
import UserProvider, { UserContext, UserConsumer } from "./context/userContext";
import ProductProvider from "./context/productContext";
import CartProvider from "./context/cartContext";
import OrderProvider from "./context/orderContext";

function App() {
    const userValue = React.useContext(UserContext)


    
    return (
        <div className="App">
            <ProductProvider>
                <UserProvider>
                    <CartProvider>
                    <OrderProvider>
                        <UserConsumer>
                             {(user) => ( 
                               
                                
                            <Switch>
                    {console.log(user.state.loggedInUser)}
                        <Route path="/MyCart" component={MyCart} />
                        <Route path="/Checkout" component={Checkout}/>
                        <Route path="/product/:id" component={ProductPage} />
                        <Route path="/:category" component={HomePage} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                                )}
                        </UserConsumer>
                    </OrderProvider>
                    </CartProvider>
                </UserProvider>
            </ProductProvider>
        </div>
    );

}

// function PrivateRoute(props) {
     
//     return(
//         <>
//     {console.log(props.user)}
//     {!props.user ? (
        
//    <Redirect
//        to={{
//            pathname: "/",
//         }}
//            />
//     ) : <Redirect
//     to={{
//         pathname: "/Checkout",
//      }}
//         /> }
//            </>

// )
// }

export default App;