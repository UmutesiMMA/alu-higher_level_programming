#!/usr/bin/node
import { argv } from "node:process";
for (let i = 0; i < 2; i++) {
  console.log(`${argv[2]} is ${argv[3]}`);
}
