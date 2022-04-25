import React, { Component } from "react";
import Beforefooterbigsight from "../../components/BeforeFooter/BeforeFooterBigSight";
import Footerbigsight from "../../components/Footer/FooterBigSight";
import Navbarbigsight from "../../components/Navbar/NavbarBigSight";
import BigsightContactusSection1 from "./BigSight-ContactUs-Section1/BigSight-ContactUs-Section1";
import "./BigSightContactUs.css";

class Bigsightcontactus extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Contact Big Sight";
    }
    render() {
        return (
            <div>
                <div className="BigSight-LandingPage-navbar-container">
                    <Navbarbigsight />
                </div>{" "}
                <div className="BigSight-ContactUs-Content-Container">
                    <BigsightContactusSection1 />
                    <Beforefooterbigsight />
                    <Footerbigsight />
                </div>
            </div>
        );
    }
}

export default Bigsightcontactus;
