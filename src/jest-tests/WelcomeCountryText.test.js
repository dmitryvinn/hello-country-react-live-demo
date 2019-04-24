import React from 'react';
import renderer from 'react-test-renderer';
import ChangeCountryButton from "../ChangeCountryButton";
import HelloCountryApp from "../HelloCountryApp";
import WelcomeCountryText from "../WelcomeCountryText";

test('Country Change Button ', () => {
    // Initialize Component
    let component;
    component = renderer.create
    (
        <WelcomeCountryText/>
    );
    // Format result
    let tree = component.toJSON();
    // Assert
    expect(tree).toMatchSnapshot();
});