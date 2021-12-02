const fs = require("fs");

const text = fs.readFileSync("./input.txt", "utf-8");

const data = text.split("\n");

const dataDict = data.map((item) => {
  const [dir, val] = item.split(" ");
  return [dir, val];
});

// Part One:
// https://adventofcode.com/2021/day/2

let horizontal = 0;
let depth = 0;

dataDict.forEach((direction) => {
  switch (direction[0]) {
    case "up":
      depth = depth - Number(direction[1]);
      break;
    case "down":
      depth = depth + Number(direction[1]);
      break;
    case "forward":
      horizontal = horizontal + Number(direction[1]);
      break;
  }
});

console.log("H: ", horizontal);
console.log("V: ", depth);
console.log("HxV: ", horizontal * depth);

// Part Two
// https://adventofcode.com/2021/day/2#part2

let horiz = 0;
let dep = 0;
let aim = 0;

dataDict.forEach((direction) => {
  switch (direction[0]) {
    case "up":
      aim = aim - Number(direction[1]);
      break;
    case "down":
      aim = aim + Number(direction[1]);
      break;
    case "forward":
      horiz = horiz + Number(direction[1]);
      dep = dep + aim * Number(direction[1]);
      break;
  }
});

console.log("H: ", horiz);
console.log("V: ", dep);
console.log("HxV: ", horiz * dep);
