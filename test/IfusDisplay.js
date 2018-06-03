import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';

import Button from "../lib/index"
import React, { Component } from "react"
import IfElse from "./IfElse"
describe('if-else', () => {
    it('if else-if else', () => {
        let node = mount(<IfElse />)
        expect(
            node.find('em').html()
        ).to.equal('<em>default</em>')
        node.find('button').simulate('click')
        expect(
            node.find('em').html()
        ).to.equal('<em>loading</em>')
        node.find('button').simulate('click')
        expect(
            node.find('em').html()
        ).to.equal('<em>loaded</em>')
        node.find('button').simulate('click')
        expect(
            node.find('em').html()
        ).to.equal('<em>loading</em>')
    });
    it('if useDisplay', () => {
        let node = mount(<IfElse useDisplay />)
        expect(
            node.find('em').html()
        ).to.equal('<em>default</em>')
        node.find('button').simulate('click')
        expect(
            node.find('em').html()
        ).to.equal('<em>loading</em>')
        node.find('button').simulate('click')
        expect(
            node.find('em').html()
        ).to.equal('<em>loaded</em>')
        node.find('button').simulate('click')
        expect(
            node.find('em').html()
        ).to.equal('<em>loading</em>')
    });
})
