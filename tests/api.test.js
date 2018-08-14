const chai = require('chai');
const server = require('../server');
const should = chai.should();
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

describe('api test', () => {
    it('should connect', () => {
        chai.request(server)
            .get('/server')
            .end((err, res) => {
                res.should.have.status(200);
            })
    });

    it('should get word', () => {
        chai.request(server)
            .get('/server/getWord')
            .end((err,res) => {
                res.body.should.have.property('word');
            })
    });
    it('should get words array', () => {
        chai.request(server)
            .get('/server/getWords')
            .end((err,res) => {
                res.body.should.have.property('words');
                expect(res.body.words).to.be.a('array');
            })
    });
    it('should post result', () => {
        chai.request(server)
            .post('/server/result')
            .send({username: "tester", score: 123})
            .then(res => expect(res).to.have.status(200));
    })
})