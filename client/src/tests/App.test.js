import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let wrapper;

describe('App', () => {
  var wordOne = 'test';
  var wordTwo = 'test';
  var wordThree = 'abc';
  var fragOne = 'te';
  var fragTwo = 'ts';
  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<App />);
});
afterEach(() => {
  moxios.uninstall();
})
  
  it('should work', () => {
   expect(wrapper).to.exist;
  });

  it('should check if words are equal', () => {
    expect(wrapper.instance().fullWord(wordOne, wordTwo)).to.be.equal(true);
    expect(wrapper.instance().fullWord(wordOne, wordThree)).to.be.equal(false);
  });

  it('should check if word is fragment of another', () => {
    expect(wrapper.instance().fragmentOfWord(fragOne,wordOne)).to.be.equal(true);
    expect(wrapper.instance().fragmentOfWord(fragTwo,wordTwo)).to.be.equal(false);
  });

  it('should validate word', () => {
    expect(wrapper.instance().validateWord(fragOne,wordOne)).to.be.equal(true);
    expect(wrapper.instance().validateWord(fragTwo,wordTwo)).to.be.equal(false);
    expect(wrapper.instance().validateWord(wordOne, wordTwo)).to.be.equal(true);
    expect(wrapper.instance().validateWord(wordOne, wordThree)).to.be.equal(false);
  });

})
