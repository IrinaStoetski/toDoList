const express = require('express');
const app = express();
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let updateNote = require('./updateNote');

describe('Testing method put - update note', () => {
    it('it should UPDATE a note given the id', (done) => {
        // let note = {
        //     title: "my first note",
        //     description: "description my first note"
        // }
        chai.request(app)
            .get('/notes/5c17f47c126b6b0a3869efc6')
            .end(function (err, res) {
                chai
                    .request(app)
                    .put('/notes/5c17f47c126b6b0a3869efc6')
                    .send({
                        title: "update my note",
                        description: "description my first note"
                    })
                    .end(function (err, res) {
                        // expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        done();
                    });
                // .end((err, res) => {
                //     console.log(res.body);
                //     // if (err) return done(err);
                //     // expect(res).to.have.status(404);
                //     done();
                // });
            });
    });
});
