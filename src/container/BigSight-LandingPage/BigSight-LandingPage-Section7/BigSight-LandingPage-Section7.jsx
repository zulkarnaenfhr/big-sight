import React, { Component } from "react";
import "./BigSight-LandingPage-Section7.css";
import { Link } from "react-router-dom";

class BigsightLandingpageSection7 extends Component {
    render() {
        return (
            <div id="BigSight-LandingPage-Section7">
                <div className="BigSight-LandingPage-Section7-Text-Container">
                    <h1 className="BigSight-LandingPage-Section7-Title">Embark Your AI Journey with Smart platform Now!</h1>
                    <Link
                        className="BigSight-LandingPage-Section7-Button-Container"
                        to={{
                            pathname: `/smart-platform/contactus`,
                        }}
                    >
                        <button className="BigSight-LandingPage-Section7-Button">Contact Us</button>
                    </Link>
                </div>{" "}
                <div className="BigSight-LandingPage-Section7-Background-Container">
                    <img className="BigSight-LandingPage-Section7-Background1" src={require("../../../src/Big-Sight/Landing Page/Section-7-Background.png")} alt="" />
                    <div className="BigSight-LandingPage-Section7-Background2-Container">
                        <img className="BigSight-LandingPage-Section7-Background2" src={require("../../../src/Big-Sight/Landing Page/Section-7-Background2.png")} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default BigsightLandingpageSection7;
