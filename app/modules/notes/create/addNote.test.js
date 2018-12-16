// // "test": "mocha \"./app/modules/notes/create/*.test.js\" ",
//"test": "mocha './app/**/*.js' tests",
const express = require('express');
const app = express();
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;
chai.use(chaiHttp);

let addNote = require('./addNote.js');

const supertest = require("supertest");
const server = supertest.agent("http://localhost:8000");
const should = require('should');

describe('POST /note', function() {
    it('add new note', function(done) {
        let note = {
            title: 'note1',
            description: 'description1'
        }
        chai.request(app)
            .post('/notes')
            .send(note)
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) return done(err);

                // res.body.note.should.have.property('title');
                // res.body.note.should.have.property('description');
                done();
            });
    });
});
