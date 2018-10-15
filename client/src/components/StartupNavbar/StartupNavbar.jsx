import React from "react";
// used for making the prop types of this component
import "./StartupNavbar.css";

class StartupNavbar extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg"
                id="mainNav">
                <div className="container">
                <a id="navhead"
                className="navbar-brand js-scroll-trigger" href="/splash#page-top">
                StartHub - Startup
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-2">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/connect_to_vendor">Find a Vendor</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item navbar-action-button">
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}



export default StartupNavbar;
