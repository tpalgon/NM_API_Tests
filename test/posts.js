const chai = require("chai");
  expect = require("chai").expect,
  supertest = require("supertest"),
  api = supertest("https://jsonplaceholder.typicode.com");
chai.use(require('chai-json-schema'));

describe("\/posts endpoint", function() {

it("GET posts", function(done) {

let getSchema = {
  "type": "array",
  "items": {
    "$id": "#/items",
    "type": "object",
    "title": "The Items Schema",
    "required": [
      "userId",
      "id",
      "title",
      "body"
    ],
    "properties": {
      "userId": {
        "$id": "#/items/properties/userId",
        "type": "integer",
      },
      "id": {
        "$id": "#/items/properties/id",
        "type": "integer",
      },
      "title": {
        "$id": "#/items/properties/title",
        "type": "string",
      },
      "body": {
        "$id": "#/items/properties/title",
        "type": "string",
      }
    }
  }
};
//**send GET request
api.get('/posts')
  .end(function(err, res) {
    //test that request is successful
    expect(res.status, "response status is 200").to.equal(200);
    //schema test will confirm response not only has correct properties but that each one as the correct type
    expect(res.body, "response schema is correct").to.be.jsonSchema(getSchema);
    done();
  });
});

it("POST post", function(done) {
let postSchema = {
  "type": "object",
  "title": "The Items Schema",
  "required": [
    "userId",
    "id",
    "title",
    "body"
  ],
  "properties": {
    "userId": {
      "$id": "#/items/properties/userId",
      "type": "integer",
    },
    "id": {
      "$id": "#/items/properties/id",
      "type": "integer",
    },
    "title": {
      "$id": "#/items/properties/title",
      "type": "string",
    },
    "body": {
      "$id": "#/items/properties/title",
      "type": "string",
    }
  }
};

let postBody = {
  "userId": 1,
  "title": "test",
  "body": "this is a test body"
};

api.post('/posts')
  //**set body requirement
  .send(postBody)
  //**set headers requirement
  .set('Content-Type', 'application/json')
  .end(function(err, res) {
    //test that request is successful
    expect(res.status, "response status is 201").to.equal(201);
    //schema test will confirm response not only has correct properties but that each one as the correct type
    expect(res.body, "response schema is correct").to.be.jsonSchema(postSchema);
    let response = JSON.stringify(res.body);
    postBody["id"] = 101;
    let post = JSON.stringify(postBody);
    //**assert what the response will be
    //I know to test this based off the API documentation which says that for the POST response I can expect my object + a new id key, which will always be 101 because the database stops at id: 100
    expect(response, "my response is the object I sent + a new id key").to.equal(post);
    done();
  });
});



});
});

});
