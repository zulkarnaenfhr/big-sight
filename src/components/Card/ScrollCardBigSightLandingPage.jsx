import React, { Component } from "react";
import "./ScrollCardBigSightLandingPage.css";

class Scrollcardbigsightlandingpage extends Component {
    render() {
        return (
            <div id="ScrollCardBigSightLandingPage">
                <img loading="lazy" className="ScrollCardBigSightLandingPage-logo" src={this.props.logo} alt="" border="0"></img>
                <div className="ScrollCardBigSightLandingPage-Text-Container">
                    <h1>{this.props.judul}</h1>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default Scrollcardbigsightlandingpage;
