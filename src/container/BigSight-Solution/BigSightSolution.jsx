import React, { Component } from "react";
import Beforefooterbigsight from "../../components/BeforeFooter/BeforeFooterBigSight";
import Footerbigsight from "../../components/Footer/FooterBigSight";
import Navbarbigsight from "../../components/Navbar/NavbarBigSight";
import BigsightSolutionSection1 from "./BigSight-Solution-Section1/BigSight-Solution-Section1";
import BigsightSolutionSection2 from "./BigSight-Solution-Section2/BigSight-Solution-Section2";
import "./BigSightSolution.css";

class Bigsightsolution extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Big Sight Solution";
    }
    render() {
        return (
            <div id="BigSightSolution">
                <div className="BigSight-LandingPage-navbar-container">
                    <Navbarbigsight />
                </div>{" "}
                <div className="BigSight-Solution-Content-Container">
                    <BigsightSolutionSection1 />
                    <BigsightSolutionSection2 />
                    <Beforefooterbigsight />
                    <Footerbigsight />
                </div>
            </div>
        );
    }
}

export default Bigsightsolution;
