import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Donation.css";

export default function Donation() {
  return (
    <div id="donation">
      <h1 className="donate-us">Help us do and grow more</h1>
      <h2 className="reason">
        We provide awesome world-class URL-Shortening for free while companies
        like bitly charge you.
      </h2>
      <p className="why">
        We believe that everyone has the right to get free URL-Shortening. Why
        pay for shortening? You should get it for free.
      </p>
      <a
        className="give"
        href="https://short-shortnner-blog.vercel.app/donation"
        target="_blank"
        rel="noreferrer"
      >
        Donate Us
      </a>
    </div>
  );
}
