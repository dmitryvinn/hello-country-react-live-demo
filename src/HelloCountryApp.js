import React from "react";
import CountryFlagImage from "./CountryFlagImage";
import WelcomeCountryText from "./WelcomeCountryText";
import ChangeCountryButton from "./ChangeCountryButton";

class HelloCountryApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "american",
            label: "America",
            flag: "https://i.imgur.com/c56iDt7.png"
        };
        this.ChangeCountryButton = this.ChangeCountryButton.bind(this);
    }

    ChangeCountryButton() {
        var countryName = this.state.country;
        var CountryFlagImage = this.state.flag;
        var countryLabel = this.label;
        if (countryName === "america") {
            countryName = "america";
            countryLabel = "America";
            CountryFlagImage = "https://i.imgur.com/c56iDt7.png";
        } else {
            countryName = "canada";
            countryLabel = "Canada";
            CountryFlagImage = "https://i.imgur.com/bh3BkeN.png";
        }
        this.setState({
            country: countryName,
            flag: CountryFlagImage,
            label: countryLabel
        });
    }

    render() {
        return (
            <div>
                <WelcomeCountryText name={this.state.label} />
                <CountryFlagImage img={this.state.flag} />
                <div>
                    <ChangeCountryButton action={this.ChangeCountryButton} />
                </div>
            </div>
        );
    }
}

export default HelloCountryApp;
