import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ScoreTable from '../Components/ScoreTable';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let mockScores, wrapper;

describe('Scores: ', () => {
    beforeEach(() => {
        mockScores = [{ nickname: "test", score: 123 }, { nickname: "test2", score: 1233 }];
        wrapper = shallow(<ScoreTable scores={mockScores} />);
    });

    it('should draw <p> for each score', () => {
        expect(wrapper.find('p').length).equal(mockScores.length);
    });
})
