import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Input from '../Components/Input';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let wrapper, value;
describe('Input', () => {
    beforeEach(() => {
        value = "test";
        wrapper = shallow(<Input value={value} change={() => {}} keyPress={() => {}}/>);
    })
  it('should input exist', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('should have right value', () => {
      expect(wrapper.find('input').props().value).to.be.equal(value);
  })
})

