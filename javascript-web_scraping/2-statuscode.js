#!/usr/bin/node

const { request } = require("node:http");

const url = process.argv[2];
const resp = request(url, (error, response) => {
  if (error) {
    console.log(error);
  }
  console.log(`code: ${response.statusCode}`);
});
