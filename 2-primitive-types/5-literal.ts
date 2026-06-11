// To run: npx ts-node 2-primitive-types/5-literal.ts
// Literal types = exact values
let direction: "up" | "down" | "left" | "right";
direction = "up"; // OK
direction = "down"; // OK
// direction = "north"; // Error

let status: "success" | "error" | "loading";
status = "success"; // OK
status = "error"; // OK

// Numeric literals
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 4; // OK
// diceRoll = 7; // Error

// Boolean literals
let isTrue: true;
isTrue = true;
// isTrue = false; // Error

// Combining with other types
type Alignment = "left" | "center" | "right";
type Margin = number | "auto";

let margin: Margin = "auto"; // OK
margin = 20; // OK

// Literal inference problem
function handleResponse(result: "success" | "error") {
  console.log(result);
}

// const is inferred as literal
const constResponse = "success"; // Type: "success"
handleResponse(constResponse); // OK

// let is inferred as string
let letResponse = "success"; // Type: string
// handleResponse(letResponse); // Error

// Fix with type annotation
let fixedResponse: "success" | "error" = "success";
handleResponse(fixedResponse); // OK

// Or use 'as const'
let asConstResponse = "success" as const; // Type: "success"
handleResponse(asConstResponse); // OK