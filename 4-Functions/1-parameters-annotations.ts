// To run: npx ts-node 4-Functions/1-parameters-annotations.ts 
// Basic parameter types
function greet(name: string): void {
  console.log(`Hello ${name}`);
}
greet("Khadija Sheikh")
let pi = Math.PI;
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(pi,pi));

// Default parameters
function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log(multiply(5)); // 10
console.log(multiply(pi,pi)); 

// Optional parameters (must be last)
function buildName(first: string, last?: string): string {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
}
console.log(buildName("Umer")); // Umer
console.log(buildName("Umer", "Adnan")); // Umer Adnan
// Destructuring parameters
function printUser({ name, age }: { name: string; age: number }): void {
  console.log(`${name} is ${age} years old`);
}
printUser({ name: "Umer", age: 28 });

// Array destructuring
function getFirst([first]: string[]){
  return first;
}
console.log(getFirst(["a", "b", "c"])); // "a"