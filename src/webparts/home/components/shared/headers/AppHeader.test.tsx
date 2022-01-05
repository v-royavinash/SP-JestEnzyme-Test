/// <reference types="jest" />

import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import AppHeader from './AppHeader';

describe('Shared Component : AppHeader', () => {

    let reactComponent: ReactWrapper<{}, {}>;

    beforeEach(() => {
        reactComponent = mount(React.createElement(
            AppHeader, {}
        ));
    });

    afterEach(() => reactComponent.unmount());

    test('Check if there is a div element in the component rendering', () => {
        expect(reactComponent.find('div')).not.toBeNull();
    });

    test('Check if header title is as expected', () => {
        let appHeaderTitle = reactComponent.find('span').first().text();

        expect(appHeaderTitle).toBe("Test");
    });

    test('Check if the component matches the snapshot', () => {
        expect(reactComponent.html).toMatchSnapshot();
    });

});