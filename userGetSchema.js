module.exports = {
  userGetSchema: {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "id",
    "name",
    "username",
    "email",
    "address",
    "phone",
    "website",
    "company"
  ],
  "properties": {
    "id": {
      "$id": "#/properties/id",
      "type": "integer",
      "title": "The Id Schema",
      "default": 0,
      "examples": [
        1
      ]
    },
    "name": {
      "$id": "#/properties/name",
      "type": "string",
      "title": "The Name Schema",
      "default": "",
      "examples": [
        "Leanne Graham"
      ],
      "pattern": "^(.*)$"
    },
    "username": {
      "$id": "#/properties/username",
      "type": "string",
      "title": "The Username Schema",
      "default": "",
      "examples": [
        "Bret"
      ],
      "pattern": "^(.*)$"
    },
    "email": {
      "$id": "#/properties/email",
      "type": "string",
      "title": "The Email Schema",
      "default": "",
      "examples": [
        "Sincere@april.biz"
      ],
      "pattern": "^(.*)$"
    },
    "address": {
      "$id": "#/properties/address",
      "type": "object",
      "title": "The Address Schema",
      "required": [
        "street",
        "suite",
        "city",
        "zipcode",
        "geo"
      ],
      "properties": {
        "street": {
          "$id": "#/properties/address/properties/street",
          "type": "string",
          "title": "The Street Schema",
          "default": "",
          "examples": [
            "Kulas Light"
          ],
          "pattern": "^(.*)$"
        },
        "suite": {
          "$id": "#/properties/address/properties/suite",
          "type": "string",
          "title": "The Suite Schema",
          "default": "",
          "examples": [
            "Apt. 556"
          ],
          "pattern": "^(.*)$"
        },
        "city": {
          "$id": "#/properties/address/properties/city",
          "type": "string",
          "title": "The City Schema",
          "default": "",
          "examples": [
            "Gwenborough"
          ],
          "pattern": "^(.*)$"
        },
        "zipcode": {
          "$id": "#/properties/address/properties/zipcode",
          "type": "string",
          "title": "The Zipcode Schema",
          "default": "",
          "examples": [
            "92998-3874"
          ],
          "pattern": "^(.*)$"
        },
        "geo": {
          "$id": "#/properties/address/properties/geo",
          "type": "object",
          "title": "The Geo Schema",
          "required": [
            "lat",
            "lng"
          ],
          "properties": {
            "lat": {
              "$id": "#/properties/address/properties/geo/properties/lat",
              "type": "string",
              "title": "The Lat Schema",
              "default": "",
              "examples": [
                "-37.3159"
              ],
              "pattern": "^(.*)$"
            },
            "lng": {
              "$id": "#/properties/address/properties/geo/properties/lng",
              "type": "string",
              "title": "The Lng Schema",
              "default": "",
              "examples": [
                "81.1496"
              ],
              "pattern": "^(.*)$"
            }
          }
        }
      }
    },
    "phone": {
      "$id": "#/properties/phone",
      "type": "string",
      "title": "The Phone Schema",
      "default": "",
      "examples": [
        "1-770-736-8031 x56442"
      ],
      "pattern": "^(.*)$"
    },
    "website": {
      "$id": "#/properties/website",
      "type": "string",
      "title": "The Website Schema",
      "default": "",
      "examples": [
        "hildegard.org"
      ],
      "pattern": "^(.*)$"
    },
    "company": {
      "$id": "#/properties/company",
      "type": "object",
      "title": "The Company Schema",
      "required": [
        "name",
        "catchPhrase",
        "bs"
      ],
      "properties": {
        "name": {
          "$id": "#/properties/company/properties/name",
          "type": "string",
          "title": "The Name Schema",
          "default": "",
          "examples": [
            "Romaguera-Crona"
          ],
          "pattern": "^(.*)$"
        },
        "catchPhrase": {
          "$id": "#/properties/company/properties/catchPhrase",
          "type": "string",
          "title": "The Catchphrase Schema",
          "default": "",
          "examples": [
            "Multi-layered client-server neural-net"
          ],
          "pattern": "^(.*)$"
        },
        "bs": {
          "$id": "#/properties/company/properties/bs",
          "type": "string",
          "title": "The Bs Schema",
          "default": "",
          "examples": [
            "harness real-time e-markets"
          ],
          "pattern": "^(.*)$"
        }
      }
    }
  }
}};
