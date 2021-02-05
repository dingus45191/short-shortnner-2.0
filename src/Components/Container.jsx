import React, {useState} from 'react'
import Shortener from "./Shortener";
import Customer from "./Customer";
import Brand from "./Brand";
import Donation from "./Donation";
import Complements from "./Complements";
import Footer from "./Footer";
import NavigationBar from "./navbar";
import Image from "./images/profit.jpg";
import "./Main.css";
import Shortnner from "./Shortnner";


function Container() {
    const [click, setClick] = useState(false);
    const start= ()=>{
        setClick(true)
    }
    if(click){
        return(
          <Shortnner/>
        )
    }
    else {
        return (
            <div>
                <NavigationBar/>
                {/*Main*/}
                <div className="container">
                    <h1 className="motto">Smaller Links, more profit</h1>
                    <h2 className="slogan">
                        The URL Shortener which cares for you, your brand <br /> and your
                        customers.
                    </h2>
                    <img src={Image} className="profit" alt="profit with short-shortnner" />

                    <button className="button" onClick={start}>Start Now</button>
                </div>
                {/*Main ends*/}
                <Shortener />
                <Customer />
                <Brand />
                <Donation />
                <Complements />
                <Footer />
            </div>
        )
    }

}

export default Container;
