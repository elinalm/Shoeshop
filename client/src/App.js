import React from 'react'
import { Switch, Route } from 'react-router-dom';
import MyCart from './components/checkout/MyCart';
import HomePage from './components/HomePage';
import { CartProvider } from './context/cartContext';
import Checkout from './components/checkout/Checkout';
import ProductPage from './components/ProductPage';
import UserProvider, { UserConsumer } from "./context/userContext";

function App() {

    return (
        <div className="App">
            <UserProvider>
                <CartProvider>
                    <Switch>
                        <Route path="/MyCart" component={MyCart} />
                        <Route path="/Checkout" component={Checkout} />
                        <Route path="/product/:id" component={ProductPage} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </CartProvider>
            </UserProvider>
        </div>
    );
}

export default App;