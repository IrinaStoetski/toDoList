const supertest = require("supertest");
const express = require('express');

const db = require('../config/db');
const MongoClient = require('mongodb').MongoClient;
const app = express();
 

describe("Main connections testing", function() {
 
    it("main page is fine", (done) => {
      request(app)
      .get('/')
      .expect(200, done);
  });
		});
		
