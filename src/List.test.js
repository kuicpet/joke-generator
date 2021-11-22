import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from './List'
import Paragraph from './Paragraph'

Enzyme.configure({adapter: new Adapter()})

describe('List', () => {
    it('should render `This list is empty` inside a paragraph component if items is an empty array', () => {
        const wrapper = shallow(<List items={[]} />)
        const paragrapgh = wrapper.find(Paragraph)
        expect(paragrapgh.props().children).toEqual('This list is empty')
    })
    it('should render a list with the body of each item inside a div', () => {
        const itemsArray = [{id: 1, body: 'Shopping'}, {id: 2,body: 'Exercise'}, {id: 3, body: 'Cook'}]
        const wrapper = shallow(<List items={itemsArray} />)
        const items = wrapper.find('div[class="item"]')
        expect(items).toHaveLength(itemsArray.length)
        expect(items.first().text()).toEqual('Shopping')
    })
})
