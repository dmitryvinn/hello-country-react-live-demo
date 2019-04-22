import React from "react";
var MediaQuery = require("react-responsive").default;

const imageStyle = {
    height: "300px",
    width: "550px",
    border: "2px solid"
};

class CountryFlagImage extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query="screen and (min-width: 376px)">
                    <img
                        className="countryFlag"
                        style={imageStyle}
                        src={this.props.img}
                        alt="Country Flag"
                    />
                </MediaQuery>

                <MediaQuery query="screen and (width: 375px)">
                    <img
                        className="countryFlag"
                        style={{ visibility: "hidden" }}
                        src={this.props.img}
                        alt="Country Flag"
                    />
                </MediaQuery>
                <MediaQuery query="screen and (max-width: 374px)">
                    <img
                        className="countryFlag"
                        style={{ display: "none" }}
                        src={this.props.img}
                        alt="Country Flag"
                    />
                </MediaQuery>
            </div>
        );
    }
}

export default CountryFlagImage;