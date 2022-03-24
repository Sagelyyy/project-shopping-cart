import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import App from "./App";
import Store from "./components/Store";
import Home from "./components/Home";
import Cart from "./components/Cart";

const RouteSwitch = () => {

    const [shoppingCart, setShoppingCart] = React.useState([])

    const cartHandler = async (item) => {
        const itemIndex = shoppingCart.findIndex((i) => i.product === item.product);
        if (itemIndex > -1) {
            const newCart = shoppingCart.slice();
            newCart[itemIndex].quantity++;

            setShoppingCart(newCart);
        } else {
            setShoppingCart([...shoppingCart, item]);
        }
    }

    const cartQuantity = async (item, newQuantity, type) => {
        const itemIndex = shoppingCart.findIndex((i) => i.product === item);
        if (itemIndex > -1) {
            const newCart = shoppingCart.slice();
            type === 'increase' ? newCart[itemIndex].quantity = newQuantity + 1 : newQuantity >= 1 ? newCart[itemIndex].quantity = newQuantity - 1 : newCart[itemIndex].quantity = 1
            if (newCart[itemIndex].quantity === 0) {
                newCart[itemIndex].quantity = 1
            }
            newCart[itemIndex].quantity > 9999 ? newCart[itemIndex].quantity = 9999 : newCart[itemIndex].quantity = newCart[itemIndex].quantity
            setShoppingCart(newCart);
        }
    }

    const removeFromCart = async (item) => {
        const itemIndex = shoppingCart.findIndex((i) => i.product === item.product);
        if (itemIndex > -1) {
            const newCart = shoppingCart.slice();
            newCart.splice(itemIndex, 1)
            setShoppingCart(newCart);
        }
    }

    const onChange = async (event, item) => {
        const {value } = event.target
        const itemIndex = shoppingCart.findIndex((i) => i.product === item.product);
        if (itemIndex > -1) {
            const newCart = shoppingCart.slice();
            // We need to check if the value is NaN, if its NaN and the value is <= 0 we return 1
            newCart[itemIndex].quantity = isNaN(parseInt(value)) ? 1 : parseInt(value) <= 0 ? 1 : parseInt(value)
            newCart[itemIndex].quantity > 9999 ? newCart[itemIndex].quantity = 9999 : newCart[itemIndex].quantity = newCart[itemIndex].quantity
            setShoppingCart(newCart);
        }
    }

    const totalItems = shoppingCart.map(item => item.quantity).reduce((a, b) => a + b, 0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App cartNumber={totalItems} />}>
                    <Route path="home" element={<Home />} />
                    <Route path="store" element={<Store shoppingCart={shoppingCart} onClick={cartHandler} />} />
                    <Route path="checkout" element={<Cart shoppingCart={shoppingCart} onAmount={cartQuantity} onRemove={removeFromCart} onChange={onChange} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch