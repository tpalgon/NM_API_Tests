const chai = require("chai");
      should = require("chai").should(),
      expect = require("chai").expect,
      supertest = require("supertest"),
      api = supertest("https://jsonplaceholder.typicode.com");
chai.use(require('chai-json-schema'));

describe("If there's already a resource, at a URI, I can use a PUT to replace it", function (){
  var testPut =
  {
    "userId": 1,
    "id": 1,
    "title": "update title",
    "body": "this is a test body"
  }

  before("There's a resource at the URI", function (done) {
    api.get("/posts/1")
    //before replacing the resource using the PUT request, I want to see that there's already one there because this test is specifically ensuring that replacing it works
    .end(function (err, res) {
      expect(200);
      expect(res.body).to.have.property("userId");
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("title");
      expect(res.body).to.have.property("body");
      done();
    });
  });
  it("200 for PUT request", function(done){
    api.put("/posts/1")
    .send(testPut)
    .expect(200, done);
  });
  it("PUT request replacing resource", function(done){
    api.get("/posts/1")
    .expect(200);
    // .end(function (err, res) {
    //   expect(JSON.stringify(res.body)).to.not.equal(JSON.stringify(testPut));
    //   done();
    // });
  });
});
