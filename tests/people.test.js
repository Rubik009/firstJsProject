let chai = require('chai');
let chaiHttp = require('chai-http');
let request = require('supertest')
let server = require('../index')

chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {
    /**
     * test the GET route
     */
    describe('GET api/people', () => {
        it('It should get list of people', async () => {
            const result = await request(server).get('/api/people').set('Accept', 'application/json');
            result.should.have.status(200);
            result.body.should.be.a('array');
        })
    })
});