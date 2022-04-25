import React, { Component } from "react";
import Beforefooterbigsight from "../../components/BeforeFooter/BeforeFooterBigSight";
import Footerbigsight from "../../components/Footer/FooterBigSight";
import Navbarbigsight from "../../components/Navbar/NavbarBigSight";
import BigsightFaqSection1 from "./BigSight-FAQ-Section1/BigSight-FAQ-Section1";
import "./BigSightFAQ.css";

class Bigsightfaq extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Big Sight FAQ";
    }
    render() {
        return (
            <div id="BigSightFAQ">
                <div className="BigSight-LandingPage-navbar-container">
                    <Navbarbigsight />
                </div>{" "}
                <div className="BigSight-FAQ-Navbar-Container">
                    <BigsightFaqSection1 />
                    <Beforefooterbigsight />
                    <Footerbigsight />
                </div>
            </div>
        );
    }
}

export default Bigsightfaq;
