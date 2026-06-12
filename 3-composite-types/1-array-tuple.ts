// To run: npx ts-node 3-composite-types/1-array-tuple.ts 
// Arrays - two syntaxes
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits)
console.log(typeof fruits)
let numbers: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers)
console.log(typeof numbers)
// Mixed type arrays (union)
let mixed: (string | number)[] = [1, "two", 3, "four"];
console.log(mixed)
console.log(typeof mixed)
// Readonly arrays
let readonlyColors: readonly string[] = ["red", "green", "blue"];
// readonlyColors.push("yellow"); // Error
console.log(readonlyColors)
console.log(typeof readonlyColors)

// Tuples - fixed length, fixed types
let person: [string, number] = ["Umer", 28];
console.log(person)
console.log(typeof person)
let rgb: [number, number, number] = [255, 0, 128];console.log(rgb)
console.log(typeof rgb)

// Tuple with optional elements
let optionalTuple: [string, number?] = ["Umer"]; // Valid
optionalTuple = ["Umer", 28]; // Also valid
console.log(optionalTuple)
console.log(typeof optionalTuple)

// Tuple with rest elements
let stringNumbers: [string, ...number[]] = ["first", 1, 2, 3];
console.log(stringNumbers)
console.log(typeof stringNumbers)

// Array methods with types
fruits.push("grape"); // OK
// fruits.push(42); // Error
console.log(fruits)

// Tuple destructuring
const [name, age] = person;
console.log(name, age);

// Common pattern: function returning tuple
function getCoordinates(): [number, number] {
  return [10, 20];
}
getCoordinates()