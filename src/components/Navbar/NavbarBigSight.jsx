import React, { Component } from "react";
import "./NavbarBigSight.css";
import { Link } from "react-router-dom";

class Navbarbigsight extends Component {
    render() {
        return (
            <nav data-aos="fade-up" data-aos-offset="200" id="navbarBigSight" className="navbar navbarBigSight navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="BigSightNavbarLogo-Container" href="/smart-platform">
                        <img className="BigSightNavbarLogo" src={require("../../../src/Smart-Platform/LogoBigSight.png")} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav BigSightnavbarMenu-container">
                            <li className="nav-item dropdown">
                                <a className="dropdown-toggle BigSightNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </a>
                                <ul className="dropdown-menu BigSightNavbarDropdownProduct-Container" aria-labelledby="navbarDropdown">
                                    <div className="row">
                                        <div className="col-6">
                                            <Link
                                                className="BigSightDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Picasso</p>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link
                                                className="BigSightDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Big View</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row BigSightNavbarDropdownProduct-row2">
                                        <div className="col-6">
                                            <Link
                                                className="BigSightDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Smart Eye</p>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link
                                                className="BigSightDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Big Box</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row BigSightNavbarDropdownProduct-row3">
                                        <div className="col-6">
                                            <Link
                                                className="BigSightDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Legal Analytycs</p>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link
                                                className="BigSightDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Big Score</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item BigSightNavbarMenuSolution">
                                <Link
                                    className="BigSightNavbarMenu"
                                    to={{
                                        pathname: `/smart-platform/solution`,
                                    }}
                                >
                                    <p>Solution</p>
                                </Link>
                            </li>
                            <li className="nav-item BigSightNavbarMenuPartnership">
                                <Link
                                    className="BigSightNavbarMenu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Partnership</p>
                                </Link>
                            </li>
                            <li className="nav-item dropdown BigSightNavbarMenuResources">
                                <a className="dropdown-toggle BigSightNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu BigSightNavbarDropdownResources-Container" aria-labelledby="navbarDropdown ">
                                    <div>
                                        <Link
                                            className="BigSightDropdown-Menu-Recources"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>Documentation</p>
                                        </Link>
                                        <div className="BigSightDropdown-Menu-Recources-row2">
                                            <Link
                                                className="BigSightDropdown-Menu-Recources"
                                                to={{
                                                    pathname: `/smart-platform/FAQ`,
                                                }}
                                            >
                                                <p>FAQ</p>
                                            </Link>
                                        </div>
                                        <div className="BigSightDropdown-Menu-Recources-row3">
                                            <Link
                                                className="BigSightDropdown-Menu-Recources"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Support</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item dropdown BigSightNavbarMenuCompany">
                                <a className="dropdown-toggle BigSightNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu BigSightNavbarDropdownCompany-Container" aria-labelledby="navbarDropdown">
                                    <div>
                                        <Link
                                            className="BigSightDropdown-Menu-Company"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>About BigSight</p>
                                        </Link>
                                        <div className="BigSightDropdown-Menu-Company-row2">
                                            <Link
                                                className="BigSightDropdown-Menu-Company"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Blog</p>
                                            </Link>
                                        </div>
                                        <div className="BigSightDropdown-Menu-Company-row3">
                                            <Link
                                                className="BigSightDropdown-Menu-Company"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Press</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <button className="BigSightNavbarButtonDemoApps">DEMO APPS</button>
                            <Link
                                className="BigSightNavbarButtonContactUs"
                                to={{
                                    pathname: `/smart-platform/contactus`,
                                }}
                            >
                                <button className="BigSightNavbarButtonContactUs">CONTACT US</button>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbarbigsight;
