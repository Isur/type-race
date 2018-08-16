import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Words from '../Components/Words';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let mockWords, wrapper, firstWord;

describe('Words: ', () => {
    beforeEach(() => {
        mockWords = ['random', 'words', 'test'];
        firstWord = 'PIERWSZY';
        wrapper = shallow(<Words firstWord={firstWord} words={mockWords}/>);
    });
    
    it('should draw <h2> for first word', () => {
        expect(wrapper.find('h2').length).equal(1);
    })

    it('should draw <p> for each word', () => {
        expect(wrapper.find('p').length).equal(mockWords.length);
    });
})
