import React, { Component } from "react";
import Navbarbigsight from "../../components/Navbar/NavbarBigSight";
import "./BigSightLandingPage.css";

class Bigsightlandingpage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Big Sight Landing Page";
    }
    render() {
        return (
            <div id="BigSightLandingPage">
                <div className="BigSight-LandingPage-navbar-container">
                    <Navbarbigsight />
                </div>{" "}
            </div>
        );
    }
}

export default Bigsightlandingpage;
