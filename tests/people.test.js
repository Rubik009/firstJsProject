const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let request = require('supertest')
let server = require('../index')
const fs = require('fs');

chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {
    let people;

    /**
     * test the GET route
     */
    describe('GET api/people', () => {
        it('It should get list of people', async () => {
            const result = await request(server)
            .get('/api/people')
            .set('Accept', 'application/json');
            result.should.have.status(200);
            result.body.should.be.a('array');
        })
    })
    /**
     * test GET/:id route
     */
    describe('GET api/people/peopleById/:id', () => {
        it('It should get person by id', async () => {
            const result = await request(server)
            .get('/api/people/peopleById/' + 1)
            .set('Accept', 'application/json');
            result.should.have.status(200);
            result.should.be.a('object');
            result.body.should.have.property('id');
            result.body.should.have.property('id').eql('1');
        })
    })
    /**
     * test POST route
     */
    describe('POST api/people/addPerson', () => {
        let person = {
            "id" : "6",
            "name" : "Kirill",
            "age" : "28"
        }
        it('It should add person in people.json', async () => {
            const result = await request(server)
            .post('/api/people/addPerson')
            .send(person)
            .set('Accept', 'application/json');
            result.should.have.status(200);
            result.body.should.be.a('object');
            result.body.should.have.property('message').eql('Person added')
        })
    })
    /**
     * test PUT/:id route
     */
    describe('PUT api/people/edit/:id', () => {
        let person = {
            "id" : "4",
            "name" : "Lesha",
            "age" : "45"
        }
        it('It should edit person in people.json', async () => {
            const result = await request(server)
            .put('/api/people/edit/' + 4)
            .send(person)
            .set('Accept', 'application/json');
            result.should.have.status(200);
            result.body.should.have.property('message').eql('Person edited');
        })
    })
    /**
     * test DELETE/:id route
     */
     describe('DELETE api/people/delete/:id', () => {
        it('It should delete person by id', async () => {
            const result = await request(server)
            .delete('/api/people/delete/' + 3)
            .set('Accept', 'application/json');
            result.should.have.status(200);
            result.body.should.have.property('message').eql('Person deleted');
        })
    })
});