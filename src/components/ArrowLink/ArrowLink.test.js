import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArrowLink from './ArrowLink'

Enzyme.configure({ adapter: new Adapter() })

describe('ArrowLink', () => {
  it('should show default text', () => {
    const wrapper = shallow(<ArrowLink />)
    const text = wrapper.find('.arrowlink-text')
    expect(text.text()).toBe("EXPLORE OUR WORKS")
  });

  it('should show prop text', () => {
    const wrapper = shallow(<ArrowLink text="I AM A TEST" />)
    const text = wrapper.find('.arrowlink-text')
    expect(text.text()).toBe("I AM A TEST")
  });

  it('lineLength prop defaults to 57px', () => {
    const wrapper = shallow(<ArrowLink />)
    const line = wrapper.find('.arrowlink-base')
    const style = line.get(0).props.style
    expect(style.width).toBe("57px")
  });

  it('lineLength prop changes length of line', () => {
    const wrapper = shallow(<ArrowLink lineLength="100px" />)
    const line = wrapper.find('.arrowlink-base')
    const style = line.get(0).props.style
    expect(style.width).toBe("100px")
  });

  it('link prop should have default value', () => {
    const wrapper = shallow(<ArrowLink />)
    const hyperlink = wrapper.find('.arrowlink-wrapper')
    const href = hyperlink.get(0).props.href
    expect(href).toBe("https://themobux.com/")
  });

  it('link prop changes href of <a> tag', () => {
    const wrapper = shallow(<ArrowLink link="https://google.com"/>)
    const hyperlink = wrapper.find('.arrowlink-wrapper')
    const href = hyperlink.get(0).props.href
    expect(href).toBe("https://google.com")
  });
})
