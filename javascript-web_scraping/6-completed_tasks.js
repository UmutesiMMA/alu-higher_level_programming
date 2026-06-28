#!/usr/bin/node
const request = require('request');

request.get(process.argv[2], (error, response, body) => {
  if (error) console.log(error);
  const result = {};
  JSON.parse(body)
    .filter((el) => el.completed)
    .forEach((el) => {
      if (result[el.userId] === undefined) {
        result[el.userId] = 1;
      } else {
        result[el.userId] += 1;
      }
    });
  console.log(result);
});
