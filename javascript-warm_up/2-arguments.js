#!/usr/bin/node
let argv = process.argv;
if (argv.length == 0) {
  console.log("No argument");
} else if (argv[2] != undefined) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
