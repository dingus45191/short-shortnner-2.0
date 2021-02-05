import React from "react";
import "./Customer.css";
import Image from "./images/all-links.png";

export default function Customer() {
  return (
    <>
      <div className="customer-container">
        <h1 className="customerMotto">
          Link Shortener that understands your pain
        </h1>
        <h4 className="custom">
          Typing long links can be horrifying. Links weren't made to trouble
          you, they were made to make your life easier.
        </h4>
        <img
          src={Image}
          alt="Which one of these links do you want?"
          className="links"
        />
      </div>
    </>
  );
}
