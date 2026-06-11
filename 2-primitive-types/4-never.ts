// To run: npx ts-node 2-primitive-types/4-never.ts 
// Never = function never returns
function infiniteLoop(): never {
  while (true) {
    // Never exits
  }
}

// Never in type checking
function checkNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

// Exhaustive checking with never
type Shape = "circle" | "square";

function getArea(shape: Shape, size: number): number {
  switch (shape) {
    case "circle":
      return Math.PI * size * size;
    case "square":
      return size * size;
    default:
      return checkNever(shape); // TypeScript ensures all cases handled
  }
}

// Never vs void
// void = returns undefined (function completes)
// never = never completes (throws error or infinite loop)

function returnsVoid(): void {
  return; // OK
}

function returnsNever(): never {
  throw new Error(); // Never returns
}