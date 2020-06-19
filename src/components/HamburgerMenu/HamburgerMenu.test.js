import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HamburgerMenu from './HamburgerMenu'

Enzyme.configure({ adapter: new Adapter() })

describe('HamburgerMenu', () => {
  it('menu is closed when app is loaded', () => {
    const wrapper = shallow(<HamburgerMenu />)
    const menu = wrapper.find('.hamburger-menu-wrapper')
    const widthIsZero = !!menu.get(0).props.style && menu.get(0).props.style.width === '0px'
    expect(widthIsZero).toBe(true)
  });
  it('menu opens when hamburger icon is clicked', () => {
    const wrapper = shallow(<HamburgerMenu />)
    const button = wrapper.find('.hamburger-menu-icon')
    button.simulate('click')
    const menu = wrapper.find('.hamburger-menu-wrapper')
    const widthIsZero = !!menu.get(0).props.style && menu.get(0).props.style.width === '0px'
    expect(widthIsZero).toBe(false)
  });


})
