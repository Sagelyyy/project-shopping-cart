import React from "react";
import '../App.css'

const Card = (props) => {
    return(
        <div className="card--container">
            <h1 className="card--title">{props.name}</h1>
            <img className="card--img" src={props.image} />
            <h3 className="card--desc">{props.desc}</h3>
            <div className="card--purchase--container">
            {props.onDecrease && <h4 className="card--quantity">Quantity:</h4>}
            {props.onDecrease && <button onClick={props.onDecrease} className="card--incdec">-</button>}
            {props.onDecrease && <input value={parseInt(props.quantity) || 0} onChange={props.onChange} className="card--amount" type="number"></input>}
            {props.onIncrease && <button onClick={props.onIncrease} className="card--incdec">+</button>}
            {props.onClick && <h4>Price:</h4>}
            <h4 className="card--price">${props.price}</h4>
            {props.onClick && <button onClick={props.onClick} className="card--button">Add to cart</button>}
            {props.onRemove && <button onClick={props.onRemove} className="card--button">Remove from Cart</button>}
            </div>
        </div>
    )
}

export default Card