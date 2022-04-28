import React, { Component } from "react";
import "./BeforeFooterBigSight.css";

class Beforefooterbigsight extends Component {
    render() {
        return (
            <div id="BigSight-LandingPage-Section8">
                <div className="BigSight-LandingPage-Section8-Parent-Content-Container"  >
                    <img className="BigSight-LandingPage-Section8-BigSight-Logo" data-aos="fade-up" data-aos-offset="100" src={require("../../src/Big-Sight/LogoBigSight.png")} alt="Logo-Navbar" border="0"></img>
                    <div className="row BigSight-LandingPage-Section8-Content-Container">
                        <div className="col-4 BigSight-LandingPage-Section8-Content-Left">
                            <div>
                                <p className="BigSight-LandingPage-Section8-BigSight-ColLeft-Row1" data-aos="fade-up" data-aos-offset="100">
                                    Telkom Direktorat Digital Bussiness Bandung
                                </p>
                                <p className="BigSight-LandingPage-Section8-BigSight-ColLeft-Row2" data-aos="fade-up" data-aos-offset="100">
                                    Jl. Gegerkalong Hilir no. 47, Sukasari, Kota <br /> Bandung, Jawa Barat 40152
                                </p>
                                <p className="BigSight-LandingPage-Section8-BigSight-ColLeft-Row3" data-aos="fade-up" data-aos-offset="100">
                                    (022) 4571261
                                </p>
                                <p className="BigSight-LandingPage-Section8-BigSight-ColLeft-Row4" data-aos="fade-up" data-aos-offset="100">
                                    admin@BigSight.id
                                </p>
                            </div>
                        </div>
                        <div className="col-4 BigSight-LandingPage-Section8-Content-Mid">
                            <div>
                                <p className="BigSight-LandingPage-Section8-BigSight-ColMid-Row1" data-aos="fade-up" data-aos-offset="100">
                                    Ikuti Social Media Kami <br />
                                    <i class="fa-brands fa-linkedin"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-facebook-square"></i>
                                </p>
                                <p className="BigSight-LandingPage-Section8-BigSight-ColMid-Row2" data-aos="fade-up" data-aos-offset="100">
                                    id.smartplatform{" "}
                                </p>
                                <p className="BigSight-LandingPage-Section8-BigSight-ColMid-Row3" data-aos="fade-up" data-aos-offset="100">
                                    Contact Integrated Dashboard Smart Governments
                                </p>
                            </div>
                        </div>
                        <img data-aos="fade-up" data-aos-offset="100" className="BigSight-LandingPage-Section8-BigSight-RightMid" src={require("../../src/Big-Sight/Landing Page/Section-8-LogoRight.png")} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Beforefooterbigsight;
