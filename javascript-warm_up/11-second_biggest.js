#!/usr/bin/node

let args = process.argv.slice(2);
if (args.length <= 1) {
  console.log(0);
} else {
  let orderedList = args.sort((a, b) => b - a);
  console.log(orderedList[1]);
}
