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
        ).to.equal('<em><span>default</span></em>')
        node.find('button').simulate('click')
        expect(
            node.find('em').html()
        ).to.equal('<em>loading</em>')
        node.find('button').simulate('click')
        expect(
            node.find('em').html()
        ).to.equal('<em><div data-name="text">loaded</div></em>')
        node.find('button').simulate('click')
        expect(
            node.find('em').html()
        ).to.equal('<em>loading</em>')
    })
    it('if useDisplay', () => {
        let node = mount(<IfElse useDisplay />)
        expect(
            node.html()
        ).to.equal('<div><em><div style="display: inline;"><span>default</span></div><div style="display: none;"><div data-name="text">loaded</div></div></em><button>change loading</button></div>')
        node.find('button').simulate('click')
        expect(
            node.html()
        ).to.equal('<div><em>loading<div style="display: none;"><span>default</span></div><div style="display: none;"><div data-name="text">loaded</div></div></em><button>change loading</button></div>')
        node.find('button').simulate('click')
        expect(
            node.html()
        ).to.equal('<div><em><div style="display: none;"><span>default</span></div><div style="display: inline;"><div data-name="text">loaded</div></div></em><button>change loading</button></div>')
        node.find('button').simulate('click')
        expect(
            node.html()
        ).to.equal('<div><em>loading<div style="display: none;"><span>default</span></div><div style="display: none;"><div data-name="text">loaded</div></div></em><button>change loading</button></div>')
    })
})
