import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SubmitScore from '../Components/SubmitScore';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import api_calls from '../config/api_calls';
import moxios from 'moxios';
configure({ adapter: new Adapter() });
let wrapper;

const func = () => {
   // console.log('test');
}

describe('SubmitScore', () => {
    beforeEach(() => {
        moxios.install();
        wrapper = shallow(<SubmitScore back={func} score={213}/>);
    });
    afterEach(() => {
        moxios.uninstall();
    })

    it('should input exist', () => {
        expect(wrapper).to.exist;
        expect(wrapper.find('input')).to.have.length(1);
    });
    it('should button exist', () => {
        expect(wrapper.find('button')).to.have.length(1);
    });
    it('should invoke function on click', (done) => {
        let spy = sinon.spy(api_calls, 'postResult');
        wrapper.instance().submit();
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({}).then(() => {
                expect(spy.calledOnce).to.be.true;
                done();
            })
        })
    });
})

