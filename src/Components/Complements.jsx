import React from "react";
import "./Complements.css";

export default function Complements() {
  return (
    <div className="complements">
      <h1 id="complement">Not Just a link shortener</h1>

      <a
        href="https://shortnner-blog.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="learn-more"
      >
        Learn More
      </a>
    </div>
  );
}
