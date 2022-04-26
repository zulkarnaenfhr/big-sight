import React, { Component } from "react";
import "./BigSight-Solution-Section2.css";

class BigsightSolutionSection2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statusWatch: "SmartCityGovernance",
        };
    }
    handleButtonStatusWatch = (e) => {
        this.setState({
            statusWatch: e.target.name,
        });
    };
    render() {
        return (
            <div id="BigSight-Solution-Section2" data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
                <div className="row BigSight-Solution-Section2-Content-Container">
                    <div className="col-4 BigSight-Solution-Section2-Content-Left">
                        <button
                            name="SmartCityGovernance"
                            onClick={this.handleButtonStatusWatch}
                            className={this.state.statusWatch === "SmartCityGovernance" ? "BigSight-Solution-Section2-Button BigSight-Solution-Section2-Button-Active" : "BigSight-Solution-Section2-Button"}
                        >
                            Smart City & Governance
                        </button>
                        <br />
                        <button
                            name="Facility"
                            onClick={this.handleButtonStatusWatch}
                            className={
                                this.state.statusWatch === "Facility"
                                    ? "BigSight-Solution-Section2-Button BigSight-Solution-Section2-Button-Active BigSight-Solution-Section2-Secondrow"
                                    : "BigSight-Solution-Section2-Button BigSight-Solution-Section2-Secondrow"
                            }
                        >
                            Facility
                        </button>
                        <br />
                        <button
                            name="Transport"
                            onClick={this.handleButtonStatusWatch}
                            className={
                                this.state.statusWatch === "Transport"
                                    ? "BigSight-Solution-Section2-Button BigSight-Solution-Section2-Button-Active BigSight-Solution-Section2-Secondrow"
                                    : "BigSight-Solution-Section2-Button BigSight-Solution-Section2-Secondrow"
                            }
                        >
                            Transport
                        </button>
                        <br />
                        <button
                            name="Financial Services"
                            onClick={this.handleButtonStatusWatch}
                            className={
                                this.state.statusWatch === "Financial Services"
                                    ? "BigSight-Solution-Section2-Button BigSight-Solution-Section2-Button-Active BigSight-Solution-Section2-Secondrow"
                                    : "BigSight-Solution-Section2-Button BigSight-Solution-Section2-Secondrow"
                            }
                        >
                            Financial Services
                        </button>
                    </div>
                    <div className="col-8">
                        {this.state.statusWatch === "SmartCityGovernance" ? (
                            <div className="row BigSight-Solution-Section2-RightSection">
                                <div className="col-6 BigSight-Solution-Section2-RightSection-Left">
                                    <div>
                                        <img className="BigSight-Solution-Section2-RightSection-Logo-FaceDetection" src={require("../../../src/Big-Sight/Landing Page/Section-4-Face-Detection.png")} alt="" />
                                        <p className="BigSight-Solution-Section2-RightSection-Title">Face Detection</p>
                                        <p className="BigSight-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 BigSight-Solution-Section2-RightSection-Right-DocumentIntegration">
                                    <div>
                                        <img className="BigSight-Solution-Section2-RightSection-Logo-DocumentDetection" src={require("../../../src/Big-Sight/Landing Page/Section-4-Document-Detection.png")} alt="" />
                                        <p className="BigSight-Solution-Section2-RightSection-Title">Document Detection</p>
                                        <p className="BigSight-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : this.state.statusWatch === "Facility" ? (
                            <div className="row BigSight-Solution-Section2-RightSection">
                                <div className="col-6 BigSight-Solution-Section2-RightSection-Left">
                                    <div>
                                        <img className="BigSight-Solution-Section2-RightSection-Logo-FaceDetection" src={require("../../../src/Big-Sight/Landing Page/Section-4-Face-Detection.png")} alt="" />
                                        <p className="BigSight-Solution-Section2-RightSection-Title">Face Detection</p>
                                        <p className="BigSight-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 BigSight-Solution-Section2-RightSection-Right">
                                    <div>
                                        <img className="BigSight-Solution-Section2-RightSection-Logo-DataIntegration" src={require("../../../src/Big-Sight/Landing Page/Section-4-Data-Integration.png")} alt="" />
                                        <p className="BigSight-Solution-Section2-RightSection-Title">Data Integration</p>
                                        <p className="BigSight-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : this.state.statusWatch === "Transport" ? (
                            <div className="row BigSight-Solution-Section2-RightSection">
                                <div className="col-12">
                                    <div>
                                        <img className="BigSight-Solution-Section2-RightSection-Logo-ObjectDetection" src={require("../../../src/Big-Sight/Solution/Smart-Platform-Solution-Section2-ObjectDetection.png")} alt="" />
                                        <p className="BigSight-Solution-Section2-RightSection-Title">Object Detection</p>
                                        <p className="BigSight-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="row BigSight-Solution-Section2-RightSection">
                                <div className="col-12">
                                    <div>
                                        <img className="BigSight-Solution-Section2-RightSection-Logo-PaymentBehavior" src={require("../../../src/Big-Sight/Landing Page/Section-4-Payment-Behavior.png")} alt="" />
                                        <p className="BigSight-Solution-Section2-RightSection-Title">Payment Behavior</p>
                                        <p className="BigSight-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default BigsightSolutionSection2;
