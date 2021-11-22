import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Toggle from './Toggle'

Enzyme.configure({adapter: new Adapter()})

describe('Toggle', () => {
    const wrapper = shallow(<Toggle/>)
    it('renders "roggled" as button children if button is clicked', () => {
        wrapper.find('button').simulate('click')
        expect(wrapper.find('button').text()).toEqual('Toggled')
    })
    it('renders "Toggled" as button children if button is clicked again', () => {
        wrapper.find('button').simulate('click')
        expect(wrapper.find('button').text()).toEqual('Toggle')
    })
})