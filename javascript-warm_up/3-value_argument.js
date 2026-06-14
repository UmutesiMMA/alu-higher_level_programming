#!/usr/bin/node
const argv = process.argv;
if (argv[2] !== undefined) {
  const arguments = argv.slice(2);
  arguments.forEach((element) => {
    console.log(element);
  });
} else {
  console.log("No argument");
}
