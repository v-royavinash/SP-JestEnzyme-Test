/// <reference types="jest" />

import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { IPageHeaderProps } from './PageHeader';
import PageHeader from './PageHeader';

describe('SampleContent: Unit Test', () => {

    let pageHeader: string = "Test Page Header";
    let reactComponentWithRequiredProps: ReactWrapper<IPageHeaderProps, {}>;
    let reactComponentWithAllProps: ReactWrapper<IPageHeaderProps, {}>;

    beforeEach(() => {
        reactComponentWithRequiredProps = mount(React.createElement(
            PageHeader, { pageHeaderLabel: pageHeader }
        ));

        reactComponentWithAllProps = mount(React.createElement(
            PageHeader, {
            pageHeaderLabel: pageHeader,
            buttonLabel: "Test Button label",
        }
        ));
    });

    afterEach(() => reactComponentWithRequiredProps.unmount());

    test('Check if there is a DIV element in the component rendering', () => {
        expect(reactComponentWithRequiredProps.find('div')).not.toBeNull();
    });

    test('Check if page header title is as expected', () => {
        let appHeaderTitle = reactComponentWithRequiredProps.find('span').first().text();

        expect(appHeaderTitle).toBe(pageHeader);
    });

    test('Renders correct no. of images based on props', () => {
        let noOfImages = reactComponentWithRequiredProps.find('img').length;
        expect(noOfImages).toBe(1);

        noOfImages = reactComponentWithAllProps.find('img').length;
        expect(noOfImages).toBe(2);
    });

    test('Check if the component matches the snapshot', () => {
        expect(reactComponentWithRequiredProps.html).toMatchSnapshot();
    });
});

