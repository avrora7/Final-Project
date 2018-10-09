import React from "react";
// used for making the prop types of this component
import "./MarketingNavbar.css";

class MarketingNavbar extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg"
                id="mainNav">
                <div className="container">
                <a id="navhead"
                className="navbar-brand" href="#page-top">
                StartHub
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/splash#workspace">Workspace</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/splash#incubator">Incubator</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/splash#accelerator">Accelerator</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/splash#mentorship">Mentorship</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/splash#funding">Funding</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/splash#corporate">Corporate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/splash#contact">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item navbar-action-button">
                            <a className="nav-link MarketingLoginMenuBtn" href="/login">Login</a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}



export default MarketingNavbar;
