const chai = require("chai");
expect = require("chai").expect,
  supertest = require("supertest"),
  api = supertest("https://jsonplaceholder.typicode.com");
chai.use(require("chai-json-schema"));

describe("\/posts\/1 endpoint", function() {
  it("GET post/1", function(done) {
    let getSchema = {
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
    let post1 = {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    api.get("/posts/1")
      .end(function(err, res) {
        //test that request is successful
        expect(res.status, "response status is 200").to.equal(200);
        //schema test will confirm response not only has correct properties but that each one as the correct type
        expect(res.body, "response schema is correct").to.be.jsonSchema(getSchema);
        //here I am assuming / testing that the database is static
        //testing that my GET works as expected
        expect(JSON.stringify(res.body), "response is result I expect based off my static db").to.equal(JSON.stringify(post1));
        done();
      });
  });
  it("PUT posts/1", function(done) {
    //even though the schema for the GET response and PUT response are the same, I've separated them out so that if one changes, the test will be easy to update
    let putSchema = {
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

    let putBody = {
      "id": 1,
      "title": "test title",
      "body": 'test body',
      "userId": 1
    }
    api.put("/posts/1")
      .set('Content-Type', 'application/json; charset=UTF-8')
      .send(putBody)
      .end(function(err, res) {
        expect(res.status, "response status is 200").to.equal(200);
        expect(res.body, "response schema is correct").to.be.jsonSchema(putSchema);
        expect(JSON.stringify(res.body), "response is the object sent in my body").to.equal(JSON.stringify(putBody)); //assert.equal("JSON.stringify(res.body)",JSON.stringify(putBody), "response is the object sent in my body");
        done();
      });
  });
  it("DELETE posts/1", function(done){
    api.delete("/posts/1")
    .end(function(err, res) {
      expect(res.status, "response status is 200").to.equal(200);
      done();
    });
  });
});
