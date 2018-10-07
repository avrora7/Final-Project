import React from "react";
// used for making the prop types of this component
import "./MarketingNavbar.css";

class MarketingNavbar extends React.Component { 
    render() {
        return (
            <nav className="navbar-absolute fixed-top navbar navbar-dark bg-dark navbar-expand-lg" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">We speak your language</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="/splash#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="/splash#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="/splash#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="/splash#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="/splash#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger MarketingSignUpManuBtn" href="/signup">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}



export default MarketingNavbar;
