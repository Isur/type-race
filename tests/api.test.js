const chai = require('chai');
const server = require('../server');
const should = chai.should();
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const api = require('../routes/api/server');
chai.use(chaiHttp);

describe('api test', () => {
    it('should connect with server', (done) => {
        chai.request(server)
            .get('/server')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });

    it('should get word', (done) => {
        chai.request(server)
            .get('/server/getWord')
            .end((err,res) => {
                expect(res.body).to.be.a('string');
                done();
            })
    });
    it('should get words array', (done) => {
        chai.request(server)
            .get('/server/getWords')
            .end((err,res) => {
                expect(res.body).to.be.a('array');
                for(word of res.body){
                    expect(word).to.be.a('string');
                }
                done();
            })
    });
    it('should post result', (done) => {
        chai.request(server)
            .post('/server/result')
            .send({nickname: "tester", score: 123})
            .end((err,res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.be.equal(true);
                done();
            });
    });
    it('should get top 10 results', (done) => {
        chai.request(server)
            .get('/server/top10')
            .end((err,res) => {
                res.body[0].should.have.property('nickname');
                res.body[0].should.have.property('score');
                expect(res.body).to.be.a('array');
                done();
            })
    });

    it('should return quantity of words',(done) => {
        api.getQuantityOfWords().then(res => {
            expect(res).to.be.equal(400);
            done();
          })
    });

    it('should return X words', (done) => {
        api.getRandomWord(7).then(res => {
            for(word of res){
                expect(word).to.be.a('string');
            }
            expect(res).to.be.lengthOf(7);
        }).then(() => {
            api.getRandomWord(1).then(res => {
                expect(res).to.be.a('string');
                done();
            })
        })
    });

    it('should delete all words', (done) => {
        chai.request(server)
            .delete('/server/deleteAllWords')
            .end((err,res) => {
                expect(res.body.success).to.be.equal(true);
                done();
            })
    });
});
