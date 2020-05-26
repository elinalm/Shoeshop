import React from 'react'
import { Switch, Route } from 'react-router-dom';
import MyCart from './components/checkout/MyCart';
import HomePage from './components/HomePage';
import Checkout from './components/checkout/Checkout';
import ProductPage from './components/ProductPage';
import EditProducts from './components/EditProducts';
import UserProvider from "./context/userContext";
import ProductProvider from "./context/productContext";

function App() {

    return (
        <div className="App">
            <ProductProvider>
                <UserProvider>
                    <Switch>
                        <Route path="/MyCart" component={MyCart} />
                        <Route path="/Checkout" component={Checkout} />
                        <Route path="/product/:id" component={ProductPage} />
                        <Route path="/editProducts" component={EditProducts} />
                        <Route path="/:category" component={HomePage} />
                        <Route path="/" component={HomePage} />
                    </Switch>

                </UserProvider>
            </ProductProvider>
        </div>
    );
}

export default App;