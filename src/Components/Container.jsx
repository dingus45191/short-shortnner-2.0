import React from 'react'
import Shortener from "./Shortener";
import Customer from "./Customer";
import Brand from "./Brand";
import Donation from "./Donation";
import Complements from "./Complements";
import Footer from "./Footer";
import NavigationBar from "./navbar";
import "./Main.css";
import Main from "./Main";


function Container() {
        return (
            <div>
                <NavigationBar/>
                <Main/>
                <Shortener />
                <Customer />
                <Brand />
                <Donation />
                <Complements />
                <Footer />
            </div>
        )

}

export default Container;
