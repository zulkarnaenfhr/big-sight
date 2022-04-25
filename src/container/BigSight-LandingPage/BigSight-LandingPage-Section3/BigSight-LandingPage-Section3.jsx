import React, { Component } from "react";
import "./BigSight-LandingPage-Section3.css";
import { Link } from "react-router-dom";

class BigsightLandingpageSection3 extends Component {
    render() {
        return (
            <div id="BigSight-LandingPage-Section3">
                <h1 data-aos="fade-up" data-aos-offset="100" className="BigSight-LandingPage-Section3-Title">
                    LET'S TRY OUR DEMO APPS
                </h1>
                <p data-aos="fade-up" data-aos-offset="100" className="BigSight-LandingPage-Section3-Desc">
                    Discover how our products are implemented in real world situations and <br /> used in various use case through our interactive demo app.
                </p>
                <div data-aos="fade-up" className="BigSight-LandingPage-Section3-Button-Container">
                    <Link
                        to={{
                            pathname: `notset`,
                        }}
                    >
                        <button className="BigSight-LandingPage-Section3-Button">CONTACT US</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BigsightLandingpageSection3;
