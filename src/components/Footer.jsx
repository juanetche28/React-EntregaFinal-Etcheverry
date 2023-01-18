import React from "react";
import '../index.css';

const Footer = () => {
    return (
        <div className="col-md-6 mb-1 container-fluid d-flex align-items-start">
            <p className="me-3">Copyright ©</p>
            <a href="https://instagram.com/aromasenelalma" target="_blank" className="me-3">
                <img className="rounded" src={"/images/instagram.png"} alt={"Logo de app Instagram"} width={"32"} height={"32"}/>
            </a>
            <a href="https://www.facebook.com/aromasenelalmaa" target="_blank" className="me-3">
                <img className="rounded" src={"/images/facebook.png"} alt={"Logo de app facebook"} width={"32"} height={"32"}/>
            </a>
            <a href="https://twitter.com/" target="_blank" className="me-3">
                <img className="rounded" src={"/images/twitter.png"} alt={"Logo de app twitter"} width={"32"} height={"32"}/>
            </a>
        </div>
    )
}

export default Footer;