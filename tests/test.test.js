const chai = require('chai');
const server = require('../server');
const should = chai.should();
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const mongoose = require('mongoose');


chai.use(chaiHttp);

describe('database connection', () => {
    it('should connect with database', () => {
        expect(mongoose.connection.readyState).to.be.equal(1);
    })
})