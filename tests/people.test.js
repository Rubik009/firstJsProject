let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../routes/people')

chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {
    /**
     * test the GET route
     */
    describe('GET api/people', () => {
        it('It should get list of people', async () => {
            const result = await chai.request(server).get('/');
            result.should.have.status(200);
            result.body.should.be.a('array');
        })
    })
});