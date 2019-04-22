import React from "react";

const buttonStyle = {
    border: 'none',
    color: '#ffffff',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inlineBlock',
    fontSize: '17px',
    backgroundColor: '#555555'
};

class ChangeCountryButton extends React.Component {
    render() {
        return <button className="changeCountry"
                       style={buttonStyle}
                       onClick={this.props.action}>Switch  Country</button>
    }
}

export default ChangeCountryButton;
