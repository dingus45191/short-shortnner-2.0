import React from "react";
import "./Shortener.css";

export default function Shortener() {
  return (
    <div className="shortener">
      <div className="all">
        <input
          className="input"
          placeholder="Just click on the button to start"
     />
        <a
          className="short-it"
          role="button"
          href="http://shorts.rocks/"
        >
          {" "}
          Start
        </a>
        <p className="conditions">
          By using Short-Shortnner you agree to our
          <a href="https://shortnner-blog.vercel.app/terms"> Terms of Service </a>
          and <a href="https://shortnner-blog.vercel.app/privacy"> Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
