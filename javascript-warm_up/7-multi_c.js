#!/usr/bin/node
const argv = process.argv;
const intArg = parseInt(argv[2], 10);
if (isNaN(intArg)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < intArg; i++) {
    console.log('C is fun');
  }
}
