#!/usr/bin/node
const fs = require("fs");
const filePath = process.argv[2];
const str = process.argv[3];

fs.writeFile(filePath, str, { encoding: "utf-8" }, (error, data) => {
  if (error) console.log(error);
});
