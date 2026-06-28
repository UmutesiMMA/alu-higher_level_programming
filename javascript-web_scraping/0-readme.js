#!/usr/bin/node
const { error } = require("console");
const fs = require("fs");
console.log(process.argv);
const filePath = process.argv[2];
fs.readFile(filePath, { encoding: "utf-8" }, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
