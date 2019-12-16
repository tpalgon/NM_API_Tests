const chai = require("chai");
expect = require("chai").expect,
  supertest = require("supertest"),
  api = supertest("https://jsonplaceholder.typicode.com");
chai.use(require('chai-json-schema'));

var {
  userGetSchema
} = require("../userGetSchema");

var {
  getUsers1ExpectedResponse
} = require("../getUsers1ExpectedResponse");


describe("\/users/1 endpoint - Get user info from UserId returned from post", function() {
  var response;
    before(function (done) {
        api.get("/posts/1")
        .end(function(err, res) {
        expect(res.status, "response status is 200").to.equal(200);
            response = res.body;
            done();
          });
      });

      it("GET users/{variable from response}", function(done) {
          api.get("/users/"+response.userId)
            .end(function(err, res) {
              //test that request is successful
              expect(res.status, "response status is 200").to.equal(200);
              //schema test will confirm response not only has correct properties but that each one as the correct type
              expect(res.body, "response schema is correct").to.be.jsonSchema(userGetSchema);
              //here I am assuming / testing that the database is static
              //testing that my GET works as expected
              expect(JSON.stringify(res.body)).to.equal(JSON.stringify(getUsers1ExpectedResponse));
              done();

            });

        });

      });
