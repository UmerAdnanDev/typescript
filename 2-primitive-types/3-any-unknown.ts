//To run: npx ts-node 2-primitive-types/3-any-unknown.ts 
// ANY - Escape hatch (avoid when possible)
let dangerous: any = "hello";
console.log(dangerous)
console.log(typeof dangerous)
dangerous = 42; // No error
console.log(dangerous)
console.log(typeof dangerous)
dangerous = true; // No error
console.log(dangerous)
console.log(typeof dangerous)

// UNKNOWN - Safe alternative
let safe: unknown = "hello";
console.log(safe)
console.log(typeof safe)
safe = 42; // OK
console.log(safe)
console.log(typeof safe)
safe = true; // OK
console.log(safe)
console.log(typeof safe)

// Cannot use unknown without type check
// safe.toUpperCase(); // Error: Object is of type 'unknown'

// Must narrow type first
if (typeof safe === "string") {
  console.log(safe.toUpperCase()); // Safe
}

// Unknown with functions
function parseJSON(json: string): unknown {
  return JSON.parse(json);
}
console.log(parseJSON('{"name":"Umer"}'));
// When to use any (rare cases)
// 1. Migrating JS to TS gradually
// 2. Working with truly dynamic data
// 3. Third-party libraries without types