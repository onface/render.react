import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';

import App from "./RenderProps"
import React, { Component } from "react"

describe('<RenderProps />', () => {
    it('render "nimo"', () => {
        expect(
            mount(<App/>).html()
        ).to.equal('<div>nimo</div>')
    });
})
