const express = require('express');
const app = express();

const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;
chai.use(chaiHttp);

let updateNote = require('./updateNote.js');

const supertest = require("supertest");
const server = supertest.agent("http://localhost:8000");
const should = require('should');

describe('/GET note', () => {
    it('view note with db', (done) => {
        chai.request(app)
            .get('/notes/5c142c9f63036f1c3c0e2bc8')
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
