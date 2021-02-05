import React from "react";
import "./Brand.css";
import Image from "./images/brand.jpg";

export default function Brand() {
  return (
    <div className="Brand">
      <h1 className="brand-title">
        The Link Shortener which makes your brand bigger.
      </h1>
      <h2 className="brand-subtitle">
        Your brand was made to Woo people. Research shows that longer links
        reduce clicks while shorter links drive 34% more clicks
      </h2>
      <img src={Image} alt="Brand" className="img" />
    </div>
  );
}
