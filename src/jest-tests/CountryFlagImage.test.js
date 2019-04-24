import React from 'react';
import renderer from 'react-test-renderer';
import ChangeCountryButton from "../ChangeCountryButton";
import HelloCountryApp from "../HelloCountryApp";
import CountryFlagImage from "../CountryFlagImage";

test('Validate Country Flag', () => {
    // Initialize Component
    let component;
    component = renderer.create
    (
        <CountryFlagImage/>
    );
    // Format result
    let tree = component.toJSON();
    // Assert
    expect(tree).toMatchSnapshot();
});