const request = require('supertest');
const app = require('../app');
const chai = require('chai');
const expect = chai.expect;



it('Should return index', (done) => {
    request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .end(done)
})

//very slow db free tier AWS
it('Should return 200 when DNA is Mutant', function (done) {
    this.timeout(5000);
    setTimeout(done, 5000);
    request(app)
        .post('/mutant')
        .send({ 'dna': '["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]' })
        .expect(200)
        .end(done)
})

//very slow db free tier AWS
it('Should return 403 when DNA is Human', function (done) {
    this.timeout(5000);
    setTimeout(done, 5000);
    request(app)
        .post('/mutant')
        .send({ 'dna': '["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"]' })
        .expect(403)
        .end(done)
})

it('Should return Stats Object', function (done) {
    this.timeout(5000);
    setTimeout(done, 5000);
    request(app)
        .get('/stats')
        .expect(200)
        .expect((res) => {
            expect(res.body).to.have.keys(['count_mutant_dna', 'count_human_dna', 'ratio'])
        })
        .end(done)
})

