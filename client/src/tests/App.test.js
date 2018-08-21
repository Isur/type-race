import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon'
import urls from '../config/url';
import API from '../config/api_calls';
import { appendFileSync } from 'fs';
configure({ adapter: new Adapter() });
let wrapper;

describe('App', () => {
  var wordOne = 'test';
  var wordTwo = 'test';
  var wordThree = 'abc';
  var fragOne = 'te';
  var fragTwo = 'ts';
  var words = ['test', 'second', 'car'];
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
    expect(wrapper.instance().fragmentOfWord(fragOne, wordOne)).to.be.equal(true);
    expect(wrapper.instance().fragmentOfWord(fragTwo, wordTwo)).to.be.equal(false);
  });

  it('should validate word', () => {
    expect(wrapper.instance().validateWord(fragOne, wordOne)).to.be.equal(true);
    expect(wrapper.instance().validateWord(fragTwo, wordTwo)).to.be.equal(false);
    expect(wrapper.instance().validateWord(wordOne, wordTwo)).to.be.equal(true);
    expect(wrapper.instance().validateWord(wordOne, wordThree)).to.be.equal(false);
  });

  it('should change states of words', () => {
    wrapper.instance().setWords(words);
    expect(wrapper.state().firstWord).to.be.equal('test');
    expect(wrapper.state().words).to.deep.equal(['second', 'car']);
  });

  it('should test endOfTime', () => {
    wrapper.instance().endOfTime();
    expect(wrapper.state().start).to.be.equal(false);
    expect(wrapper.state().loadedScores).to.be.equal(false);
    expect(wrapper.state().gameFinish).to.be.equal(true);
  });
  it('should test back', (done) => {
    let spy = sinon.spy(API, 'getScores');
    wrapper.instance().back();
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({}).then(() => {
        expect(spy.calledOnce).to.be.true;
        done();
      })
    })
  })

})
