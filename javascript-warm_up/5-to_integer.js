#!/usr/bin/node
const argv = process.argv;
const intArg = parseInt(argv[2], 10);
if (isNaN(intArg)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${intArg}`);
}
