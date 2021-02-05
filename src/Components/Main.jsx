import React from 'react'
import Image from "./images/profit.jpg";

function Main() {
    return (
    <div className="container">
        <h1 className="motto">Smaller Links, more profit</h1>
        <h2 className="slogan">
            The URL Shortener which cares for you, your brand <br /> and your
            customers.
        </h2>
        <img src={Image} className="profit" alt="profit with short-shortnner" />

        <button className="button" >Start Now</button>
    </div>
    )
}

export default Main;
