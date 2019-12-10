const chai = require("chai");
      should = require("chai").should(),
      expect = require("chai").expect,
      supertest = require("supertest"),
      api = supertest("https://jsonplaceholder.typicode.com");
chai.use(require('chai-json-schema'));

describe("\/posts endpoint", function (){
  var schema = {
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

var postSchema = {
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

var postBody = {"userId": 1,
"id": 101,
"title": "test",
"body": "this is a test body"
};


  it("GET posts has 200 response", function(done){
    api.get('/posts')
    .expect(200, done);
  });
  it("GET posts has correct schema", function(done){
    api.get('/posts')
    .expect(200)
    .end(function (err,res) {
      expect(res.body).to.be.jsonSchema(schema);
      done();
    });
  });
  it("POST response has correct schema", function(done){
    api.post('/posts')
    .send(postBody)
    //**set headers requirement
    .set('Content-Type', 'application/json')
    .expect(200)
    .end(function (err,res) {
      console.log("res body", res.body);
      console.log("postBody", postBody);
      expect(res.body).to.be.jsonSchema(postSchema);
      //expect(res.body).to.equal(postBody);
      done();
    });
  });
  it("POST response matches body sent", function(done){
    api.post("/posts")
    .send(postBody)
    //**set headers requirement
    .set('Content-Type', 'application/json')
    .expect(200)
    .end(function (err,res) {
      //**assert response from a request
      expect(JSON.stringify(res.body)).to.equal(JSON.stringify(postBody));
      done();
    });
  });

});
