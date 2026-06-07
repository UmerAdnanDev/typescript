// To run: npx ts-node 1-Intro/3-type-inference.ts 
// TypeScript infers types
let name = "Umer"; // string
let age = 28; // number
let scores = [1, 2, 3]; // number[]

// Object inference
const user = {
  id: 1,
  name: "Umer",
};
// user.email = "test@test.com"; // Error
// When to annotate
let value: string | number = "start";
console.log(value)
console.log(typeof value)
let items: string[] = [];
console.log(items)
console.log(typeof items)
let result: number; // will cause error if printed without being assigned
result = 1 // = "1" will cause error
