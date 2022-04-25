import React, { Component } from "react";
import Scrollcardbigsightlandingpage from "../../../components/Card/ScrollCardBigSightLandingPage";
import "./BigSight-LandingPage-Section4.css";

class BigsightLandingpageSection4 extends Component {
    render() {
        return (
            <div id="BigSight-LandingPage-Section4">
                <div className="BigSight-LandingPage-Section4-Scroll-Container-Responsive">
                    <div className="BigSight-LandingPage-Section4-Scroll-Container" data-aos="fade-up" data-aos-offset="100">
                        <div className="BigSight-LandingPage-Section4-Scroll-Header-Container">
                            <div className="BigSight-LandingPage-Section4-Scroll-Header-Title">
                                What we’re offering Services <span>we’re providing to our clients</span>
                            </div>
                        </div>
                        <div className="BigSight-LandingPage-Section4-Scroll-Content-Container">
                            <Scrollcardbigsightlandingpage
                                logo={require("../../../src/Big-Sight/Landing Page/Section-4-Face-Detection.png")}
                                judul={`Face Detection`}
                                desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                            />
                            <Scrollcardbigsightlandingpage
                                logo={require("../../../src/Big-Sight/Landing Page/Section-4-Document-Detection.png")}
                                judul={`Document Detection`}
                                desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                            />
                            <Scrollcardbigsightlandingpage
                                logo={require("../../../src/Big-Sight/Landing Page/Section-4-Data-Integration.png")}
                                judul={`Data Integration`}
                                desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                            />
                            <Scrollcardbigsightlandingpage
                                logo={require("../../../src/Big-Sight/Landing Page/Section-4-Payment-Behavior.png")}
                                judul={`Payment Behavior`}
                                desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                            />
                            <Scrollcardbigsightlandingpage
                                logo={require("../../../src/Big-Sight/Landing Page/Section-4-Vr-Tour.png")}
                                judul={`VR Tour`}
                                desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                            />
                        </div>
                        <div className="BigSight-LandingPage-Section4-Scroll-Vector-Container">
                            <img className="BigSight-LandingPage-Section4-Scroll-Vector" src="https://i.ibb.co/cYbZrb5/panah-bawah-merah.png" alt="panah-bawah-merah" border="0"></img>
                        </div>
                    </div>
                </div>
                <img className="BigSight-LandingPage-Section4-Background" src={require("../../../src/Big-Sight/Landing Page/Section-4-Background.png")} alt="Section-3-Background" border="0"></img>
            </div>
        );
    }
}

export default BigsightLandingpageSection4;
