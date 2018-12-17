const request = require("supertest");

describe("Main page testing", function() {
  it("Get response is 200", done => {
    request("http://localhost:9000")
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
