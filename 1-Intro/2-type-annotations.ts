// To run: npx ts-node 1-Intro/2-type-annotations.ts 
// Basic types
let username: string = "Umer";
let age: number = 28;
let isActive: boolean = true;
let userId: string | number = "abc123";
userId = 456; 
console.log(username)
console.log(typeof username)
console.log(age)
console.log(typeof age)
console.log(isActive)
console.log(typeof isActive)
console.log(userId)
console.log(typeof userId)

// Arrays
let fruits: string[] = ["apple", "banana"];
let mixed: (string | number)[] = [1, "two", 3];
console.log(fruits)
console.log(typeof fruits)
console.log(mixed)
console.log(typeof mixed)

// Objects
let user: {
  name: string;
  age: number;
  email?: string;
} = {
  name: "Umer",
  age: 28,
};
console.log(user)
console.log(typeof user)

// Tuples
let coordinate: [number, number] = [10, 20];
console.log(coordinate)
console.log(typeof coordinate)

// Unknown vs any
let safe: unknown = "hello";
console.log(safe)
console.log(typeof safe)
if (typeof safe === "string") {
  console.log(safe.toUpperCase());
}
