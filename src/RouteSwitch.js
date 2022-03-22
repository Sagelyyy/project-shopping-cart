import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import App from "./App";
import About from "./components/About";
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
            if(newCart[itemIndex].quantity === 0){
                newCart[itemIndex].quantity = 1
            }
            setShoppingCart(newCart);
        }

    }

    const removeFromCart = async (item) => {
        console.log('fired!')
        const itemIndex = shoppingCart.findIndex((i) => i.product === item.product);
        if (itemIndex > -1) {
            const newCart = shoppingCart.slice();
            console.log(newCart[itemIndex])
            newCart.splice(itemIndex, 1)
            setShoppingCart(newCart);
        }
    }

    onchange = async (event, item) => {
        // TODO: Make it so changing the value in the input field updates the quantity in the item
        const {value} = event.target
        const itemIndex = shoppingCart.findIndex((i) => i.product === item.product);
        if (itemIndex > -1) {
            const newCart = shoppingCart.slice();
            setShoppingCart(newCart);
        }
    }

    const totalItems = shoppingCart.map(item => item.quantity).reduce((a, b) => a + b, 0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App cartNumber={totalItems} />}>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="store" element={<Store shoppingCart={shoppingCart} onClick={cartHandler} />} />
                    <Route path="checkout" element={<Cart shoppingCart={shoppingCart} onAmount={cartQuantity} onRemove={removeFromCart} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch