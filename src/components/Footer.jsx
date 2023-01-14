import React from "react";

const Footer = () => {
    return (
        <div className="col-md-6 container-fluid d-flex align-items-start">
            <p className="me-3">Copyright ©</p>
            <a href="https://instagram.com/aromasenelalma" target="_blank" className="me-3">
                <img className={"instagram"} src={"/images/instagram.png"} alt={"Logo de app Instagram"} width={"32"} height={"32"}/>
            </a>
            <a href="https://www.facebook.com/aromasenelalmaa" target="_blank" className="me-3">
                <img className={"facebook"} src={"/images/facebook.png"} alt={"Logo de app facebook"} width={"32"} height={"32"}/>
            </a>
            <a href="https://twitter.com/" target="_blank" className="me-3">
                <img className={"twitter"} src={"/images/twitter.png"} alt={"Logo de app twitter"} width={"32"} height={"32"}/>
            </a>
        </div>
    )
}

export default Footer;