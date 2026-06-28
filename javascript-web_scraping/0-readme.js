#!/usr/bin/node
const { error } = require("console");
const fs = require("fs");
const filePath = process.argv[1];

const data = fs.readFile(filePath, { encoding: "utf-8" }, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
