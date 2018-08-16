import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Time from '../Components/Time';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let wrapper, value;
describe('Input', () => {
    beforeEach(() => {
        wrapper = shallow(<Time value={value}/>);
    })
  it('should input exist', () => {
    expect(wrapper.find('h3')).to.have.length(1);
  })
})

