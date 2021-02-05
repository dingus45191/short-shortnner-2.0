import React from "react";
import {Navbar, Nav, Image, Button} from "react-bootstrap";
import "./navbar.css";
import brand from "./our-brand.png";

function NavigationBar() {
        return (
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand href="#" className="brand">
                        <Image src={brand} alt="Short Shortnner"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

                        <Nav.Link
                            className="effects"
                            href="https://shortnner-blog.vercel.app/short-shortnner"
                            target="_blank"
                            style={{textDecoration: "none"}}
                            rel="noreferrer"
                        >
                            Why Short Shortnner?
                        </Nav.Link>

                        <Nav.Link
                            className="effects"
                            href="https://shortnner-blog.vercel.app/newsletter"
                            target="_blank"
                            style={{textDecoration: "none"}}
                            rel="noreferrer"
                        >
                            Newsletter
                        </Nav.Link>
                        <Nav.Link
                            className="effects"
                            href="https://shortnner-blog.vercel.app/pricing"
                            style={{textDecoration: "none"}}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Pricing
                        </Nav.Link>
                        <Nav.Link
                            className="effects"
                            target="_blank"
                            href="https://shortnner-blog.vercel.app/contact-us"
                            style={{textDecoration: "none"}}
                            rel="noreferrer"
                        >
                            Contact Us
                        </Nav.Link>
                        <Nav.Link
                            className="effects"
                            target="_blank"
                            href="https://shortnner-blog.vercel.app/donation"
                            style={{textDecoration: "none"}}
                            rel="noreferrer"
                        >
                            Donate
                        </Nav.Link>
                        {/* <Navbar.Text className=" ml-auto ">
            {" "}
            <Nav.Link
              className="please-donate"
              style={{ textDecoration: "none" }}
            >

            </Nav.Link>
          </Navbar.Text> */}

                        {/* i am using effects className instead of please-donate here to make all a's look same. */}
                    </Navbar.Collapse>
                </Navbar>


            </div>

        );
}

export default NavigationBar;
