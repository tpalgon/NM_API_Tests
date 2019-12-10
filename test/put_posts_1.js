const chai = require("chai");
      should = require("chai").should(),
      expect = require("chai").expect,
      supertest = require("supertest"),
      api = supertest("https://jsonplaceholder.typicode.com");
chai.use(require('chai-json-schema'));

describe("\/posts/1 endpoint", function (){
  var testPut =
  {
    "userId": 1,
    "id": 1,
    "title": "test",
    "body": "this is a test body"
  }

  before(function (done) {
    api.get("/posts/1")
    .end(function (err, res) {
      expect(400);
      expect(res.body).to.have.property("userId");
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("title");
      expect(res.body).to.have.property("body");
      done();
    });
  });
  it("test123", function(done){
    api.put("/posts/1")
    .send(testPut)
  .expect(200, done);
  });
});
