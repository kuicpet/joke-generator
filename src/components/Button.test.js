import React from "react";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Button from "./Button";

Enzyme.configure({adapter: new Adapter()})

describe('Button', () => {
    it('it should render children in a button tag', () => {
        const wrapper = shallow(<Button>Generate a Joke</Button>)
        const button = wrapper.find('button')
        expect(button).toHaveLength(1)
        expect(button.text()).toEqual('Generate a Joke')
    })
})