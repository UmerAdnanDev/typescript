// To run: npx ts-node 2-primitive-types/1-string-num-bool.ts 
// Basic primitive types
let text: string = "Hello TypeScript";
let count: number = 42;
let isDone: boolean = true;

// Type inference works too
let inferredText = "Hello"; // string
let inferredCount = 100; // number
let inferredBoolean = false; // boolean

// Template strings (TypeScript infers string)
let name = "Umer";
let greeting = `Hello ${name}`; // string

// Number operations
let integer: number = 42;
let decimal: number = 3.14;
let negative: number = -10;
let hex: number = 0xff; // 255
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484

// Boolean operations
let isLoggedIn: boolean = true;
let isGreater = 10 > 5; // boolean

// Type errors
// text = 42; // Error
// count = "42"; // Error
// isDone = "true"; // Error