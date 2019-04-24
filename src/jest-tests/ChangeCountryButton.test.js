import React from 'react';
import renderer from 'react-test-renderer';
import ChangeCountryButton from "../ChangeCountryButton";

test('Country Change Button ', () => {
    // Initialize Component
    let component;
    component = renderer.create
    (
        <ChangeCountryButton/>
    );
    // Format result
    let tree = component.toJSON();
    // Assert
    expect(tree).toMatchSnapshot();
});