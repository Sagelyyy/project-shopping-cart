import { nanoid } from "nanoid";
import React from "react";
import Card from "./Card";

const Cart = (props) => {

    const cartElements = props.shoppingCart.map((item, index) => {
        return (
            <Card
                name={item.product}
                desc={item.desc}
                image={item.image}
                price={item.price * item.quantity}
                quantity={item.quantity}
                key={index}
                onIncrease={(() => props.onAmount(item.product, item.quantity, 'increase'))}
                onDecrease={(() => props.onAmount(item.product, item.quantity, 'decrease'))}
                onChange={((event) => props.onChange(event, item))}
                onRemove={(() => props.onRemove(item))}
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