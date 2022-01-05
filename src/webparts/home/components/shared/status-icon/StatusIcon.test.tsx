/// <reference types="jest" />

import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { IStausIconProps } from './StatusIcon';
import StatusIcon from './StatusIcon';

describe('Shared Component : StatusIcon Unit Test', () => {

    let iconName: string = "inprogress";
    let reactComponent: ReactWrapper<IStausIconProps, {}>;

    beforeEach(() => {
        reactComponent = mount(React.createElement(
            StatusIcon, { iconName: iconName }
        ));
    });

    afterEach(() => reactComponent.unmount());

    test('Component should render a image tag', () => {
        expect(reactComponent.find('img')).not.toBeNull();
    });

    test('Component should return only one a Image tag', () => {
        expect(reactComponent.find('img').length).toEqual(1);
    });

    test('Component should match the UI snapshot', () => {
        expect(reactComponent.html).toMatchSnapshot();
    });
});