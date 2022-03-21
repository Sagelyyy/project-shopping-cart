import React from "react";
import '../App.css'

const Card = (props) => {
    return(
        <div className="card--container">
            <h1 className="card--name">{props.name}</h1>
            <img className="card--img" src={props.image} />
            <h3 className="card--desc">{props.desc}</h3>
            <h5 className="card--quantity">{props.quantity}</h5>
            <h5 className="card--price">{props.price}</h5>
            <button onClick={props.onClick} className="card--button">Add to cart</button>
        </div>
    )
}

export default Card