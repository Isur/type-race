const chai = require('chai');
const server = require('../server');
const should = chai.should();
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

describe('test test', () => {
    it('should test', () => {
        expect(true).to.be.true;
    })
})
