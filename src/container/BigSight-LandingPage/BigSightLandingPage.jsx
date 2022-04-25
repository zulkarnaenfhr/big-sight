import React, { Component } from "react";
import Beforefooterbigsight from "../../components/BeforeFooter/BeforeFooterBigSight";
import Footerbigsight from "../../components/Footer/FooterBigSight";
import Navbarbigsight from "../../components/Navbar/NavbarBigSight";
import BigsightLandingpageSection1 from "./BigSight-LandingPage-Section1/BigSight-LandingPage-Section1";
import BigsightLandingpageSection2 from "./BigSight-LandingPage-Section2/BigSight-LandingPage-Section2";
import BigsightLandingpageSection3 from "./BigSight-LandingPage-Section3/BigSight-LandingPage-Section3";
import BigsightLandingpageSection4 from "./BigSight-LandingPage-Section4/BigSight-LandingPage-Section4";
import BigsightLandingpageSection5 from "./BigSight-LandingPage-Section5/BigSight-LandingPage-Section5";
import BigsightLandingpageSection6 from "./BigSight-LandingPage-Section6/BigSight-LandingPage-Section6";
import BigsightLandingpageSection7 from "./BigSight-LandingPage-Section7/BigSight-LandingPage-Section7";
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
                <div className="BigSight-LandingPage-content-container">
                    <BigsightLandingpageSection1 />
                    <div className="SPL-LandingPage-content-container-section-2-3">
                        <BigsightLandingpageSection2 />
                        <BigsightLandingpageSection3 />
                    </div>
                    <BigsightLandingpageSection4 />
                    <BigsightLandingpageSection5 />
                    <BigsightLandingpageSection6 />
                    <BigsightLandingpageSection7 />
                    <Beforefooterbigsight />
                    <Footerbigsight />
                </div>
            </div>
        );
    }
}

export default Bigsightlandingpage;
