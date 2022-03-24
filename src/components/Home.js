import React from "react";
import logo from "../images/fantasy-costco.png"

const Home = () => {
    return(
        <div className="logo--container">
            <img className="logo--image" alt="fantasy costco logo" src={logo}/>
            <h3>Fantasy Costco, where all your dreams come true! GOT A DEAL FOR YOU!</h3>
        </div>
    )
}

export default Home