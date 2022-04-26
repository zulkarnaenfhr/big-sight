import React, { Component } from "react";
import CardBigSightLandingPage from "../../../components/Card/CardBigSightLandingPage";
import "./BigSight-LandingPage-Section2.css";

class BigsightLandingpageSection2 extends Component {
    render() {
        return (
            <div id="BigSight-LandingPage-Section2">
                <div className="BigSight-LandingPage-Section2-Container container">
                    <div className="BigSight-LandingPage-Section2-Text-Container">
                        <p data-aos="fade-up" data-aos-offset="100" className="BigSight-LandingPage-Section2-Text1">
                            What We're Offering <br /> Services We're Providing To Our Client
                        </p>
                        <h2 data-aos="fade-up" data-aos-offset="100" className="BigSight-LandingPage-Section2-Text2">
                            EXPLORE OUR PRODUCT
                        </h2>
                    </div>
                    <div className="BigSight-LandingPage-Section2-Card-Container row">
                        <div className="col-4" data-aos="fade-right" data-aos-offset="100">
                            <CardBigSightLandingPage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-Legal-Analytic.png")}
                                marginTopDesc={"49px"}
                                marginTop={"37px"}
                                marginLeft={"42px"}
                                width={"119px"}
                                height={"54px"}
                                productName={`Legal Analytics `}
                                productDesc={`Merupakan aplikasi berbasis Big Data yang menghimpun seluruh peraturan perundang-undangan tersistem yang akurat, valid, dan up-to-date sehingga memudahkan pengguna`}
                                linkProduct={`notSet`}
                            />
                        </div>
                        <div className="col-4" data-aos="fade-up" data-aos-offset="100">
                            <CardBigSightLandingPage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-Big-View.png")}
                                marginTopDesc={"38px"}
                                marginTop={"26px"}
                                marginLeft={"11px"}
                                width={"223px"}
                                height={"76px"}
                                productName={`Big View `}
                                productDesc={`Layanan integrated dashboard smart government sistem yang berfungsi untuk menggabungkan data dari berbagai aplikasi vertikal ke dalam sebuah platform yang terintegrasi.`}
                                linkProduct={`notset`}
                            />{" "}
                        </div>

                        <div className="col-4" data-aos="fade-left" data-aos-offset="100">
                            <CardBigSightLandingPage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-Picaso.png")}
                                marginTopDesc={"26px"}
                                marginTop={"27px"}
                                marginLeft={""}
                                width={"233px"}
                                height={"78px"}
                                productName={`Picaso `}
                                productDesc={`Merupakan layanan API membantu para developer dan perusahaan dalam implementasi teknologi AI. Tiga fitur sesuai dengan kebutuhan Anda seperti Optical Character Recognition, Face Recognition, dan Object Detection.`}
                                linkProduct={`notSet`}
                            />{" "}
                        </div>
                    </div>
                    <div className="BigSight-LandingPage-Section2-Card-Container row" data-aos="fade-up" data-aos-offset="100">
                        <div className="col-4" data-aos="fade-right" data-aos-offset="100">
                            <CardBigSightLandingPage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-Big-Score.png")}
                                marginTopDesc={"21px"}
                                marginTop={"55px"}
                                marginLeft={"44px"}
                                width={"169px"}
                                height={"39px"}
                                productName={`Telco Risk Scoring `}
                                productDesc={`adalah angka yang memberikan informasi atau kategori Profil Risiko Telkom pelanggan yang mencerminkan seberapa baik atau buruk risiko kredit yang menurut pemberi pinjaman tertentu Anda.`}
                                linkProduct={`notset`}
                            />
                        </div>
                        <div className="col-4" data-aos="fade-up" data-aos-offset="100">
                            <CardBigSightLandingPage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-Big-Box.png")}
                                marginTopDesc={"25px"}
                                marginTop={"43px"}
                                marginLeft={"42px"}
                                width={"144px"}
                                height={"46px"}
                                productName={`Big Box `}
                                productDesc={`lorem40`}
                                linkProduct={`notSet`}
                            />{" "}
                        </div>
                        <div className="col-4" data-aos="fade-left" data-aos-offset="100">
                            <CardBigSightLandingPage
                                logoImg={require("../../../src/Big-Sight/Landing Page/Section-1-SmartEye.png")}
                                marginTopDesc={"29px"}
                                marginTop={"43px"}
                                marginLeft={"31px"}
                                width={"px"}
                                height={"46px"}
                                productName={`Smarteye.id `}
                                productDesc={`wujudkan imajinasi anda menjadi kenyataan bersama kami, dengan teknologi virtual dan augmented reality. Beragam produk dan layanan VR dan AR untuk berbagai kebutuhan anda.`}
                                linkProduct={`notSet`}
                            />{" "}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigsightLandingpageSection2;
