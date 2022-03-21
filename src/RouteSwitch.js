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

    const totalItems = shoppingCart.map(item => item.quantity).reduce((a,b) => a+b,0)

    console.log(`Quantity: ` + totalItems)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App cartNumber={totalItems}/>}>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="store" element={<Store shoppingCart={shoppingCart} onClick={cartHandler}/>} />
                    <Route path="checkout" element={<Cart shoppingCart={shoppingCart} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch