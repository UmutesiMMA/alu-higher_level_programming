#!/usr/bin/node
const argv = process.argv;
const firstArg = argv[2];
const intArg = parseInt(argv[2], 10);
if (isNaN(intArg)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < intArg; i++) {
    let result = '';
    for (let i = 0; i < intArg; i++) {
      result += 'X';
    }
    console.log(result);
  }
}
