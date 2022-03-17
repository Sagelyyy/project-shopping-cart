import React from "react";
import Card from "./Card";
import { nanoid } from "nanoid";
import '../App.css'

const Store = () => {

    const [cardData, setCardData] = React.useState([])

    const getData = () => {
        fetch('./products.json')
            .then(response => response.json())
            .then(data => setCardData(data))
            .catch(error => console.log(error))
    }

    const cardElements = cardData.map((card) => {
        return (
            <Card
                name={card.name}
                desc={card.desc}
                image={card.image}
                price={card.price}
                key={nanoid()}
            />
        )
    })

    React.useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <h1>Store</h1>
            <div className="store--items">
                {cardElements}
            </div>
        </div>
    )
}

export default Store