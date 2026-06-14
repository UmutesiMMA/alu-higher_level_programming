#!/usr/bin/node
let argv = process.argv;
let firstArg = argv[2];
let intArg = parseInt(argv[2], 10);
if (isNaN(intArg)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${intArg}`);
}
