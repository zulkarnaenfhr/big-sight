import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Bigsightcontactus from "./container/BigSight-ContactUs/BigSightContactUs";
import Bigsightfaq from "./container/BigSight-FAQ/BigSightFAQ";
import Bigsightlandingpage from "./container/BigSight-LandingPage/BigSightLandingPage";
import Bigsightsolution from "./container/BigSight-Solution/BigSightSolution";
import "./style.css";

class BigsightRouter extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/big-sight/" exact element={<Bigsightlandingpage />} />
                    <Route path="/big-sight/contactus" exact element={<Bigsightcontactus />} />
                    <Route path="/big-sight/FAQ" exact element={<Bigsightfaq />} />
                    <Route path="/big-sight/solution" exact element={<Bigsightsolution />} />
                    <Route
                        path="*"
                        element={
                            <div id="notfound-page-container">
                                <p>Page Not Found</p>
                            </div>
                        }
                    />{" "}
                </Routes>
            </div>
        );
    }
}

export default BigsightRouter;
