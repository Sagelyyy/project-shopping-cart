import { nanoid } from "nanoid";
import React from "react";
import Card from "./Card";

const Cart = (props) => {

    const cartElements = props.shoppingCart.map(item => {
        return (
            <Card
                name={item.product}
                desc={item.desc}
                image={item.image}
                price={'$' + item.price * item.quantity}
                quantity={'Total quantity: ' + item.quantity}
                key={nanoid()}
            />
        )
    })

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="store--items">
                {cartElements}
            </div>
        </div>
    )

}

export default Cart