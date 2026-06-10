// To run: npx ts-node 2-primitive-types/2-null-undefined-void.ts 
// Null and undefined
let empty: null = null;
let notAssigned: undefined = undefined;
console.log(empty)
console.log(typeof empty)
console.log(empty)
console.log(typeof empty)

// Variables that can be null/undefined
let maybeString: string | null = null;
let maybeNumber: number | undefined = undefined;
console.log(empty)
console.log(typeof empty)
console.log(empty)
console.log(typeof empty)

// Function that returns nothing
function logMessage(message: string): void {
  console.log(message);
  // No return statement
}
logMessage("Hi, Today is 11-June-2026")

// Void vs undefined
let unusable: void = undefined;
// unusable = null; // Error with strictNullChecks
console.log(unusable)
console.log(typeof unusable)

// Practical example
function findUser(id: number): { name: string } | null {
  if (id === 1) {
    return { name: "Umer" };
  }
  return null;
}
findUser(1)
findUser(2)
// Never type (function never returns)
function throwError(message: string): never {
  throw new Error(message);
}
// throwError("Error Occured") // it throws an error
function infiniteLoop(): never {
  while (true) {
    // Never returns
  }
}
infiniteLoop()