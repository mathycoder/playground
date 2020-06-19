import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HamburgerMenu from './HamburgerMenu'

Enzyme.configure({ adapter: new Adapter() })

describe('HamburgerMenu', () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HamburgerMenu />);
    expect(wrapper).toMatchSnapshot();
  });
  it('menuIsOpen is false when app is loaded', () => {
    const wrapper = shallow(<HamburgerMenu />)
    const menu = wrapper.find('.hamburger-menu-wrapper')
    expect(menu.get(0).props.menuIsOpen).toBe(false)
  });
  it('menuIsOpen is true after hamburger menu click', () => {
    const wrapper = shallow(<HamburgerMenu />)
    const button = wrapper.find('.hamburger-menu-icon')
    button.simulate('click')
    const menu = wrapper.find('.hamburger-menu-wrapper')
    expect(menu.get(0).props.menuIsOpen).toBe(true)
  });
})
