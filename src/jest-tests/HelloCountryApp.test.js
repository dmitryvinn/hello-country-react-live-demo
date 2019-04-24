import React from 'react';
import renderer from 'react-test-renderer';
import HelloCountryApp from "../HelloCountryApp";

test('Testing entire app', () => {
    // Initialize Component
    let component = renderer.create
    (
        <HelloCountryApp/>
    );
    // Format result
    let tree = component.toJSON();
    // Assert
    expect(tree).toMatchSnapshot();

    // // Fail scenario
    // component.root.findByProps({className: "changeCountry"}).props.onClick();
    // expect(component.toJSON()).toMatchSnapshot();

});