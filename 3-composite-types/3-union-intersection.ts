// To run: npx ts-node 3-composite-types/3-union-intersection.ts 
// Union types (OR) - |
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
console.log(value)
console.log(typeof value)
value = 42; // OK
console.log(value)
console.log(typeof value)
// value = true; // Error

// Union with literal types
type Status = "pending" | "success" | "error";
let requestStatus: Status = "pending";
console.log(requestStatus)
requestStatus = "success"; // OK
console.log(requestStatus)
console.log(typeof requestStatus)
// requestStatus = "failed"; // Error

// Type narrowing with unions
function processValue(val: string | number) {
  if (typeof val === "string") {
    return val.toUpperCase(); // string method
  }
  return val.toFixed(2); // number method
}
console.log(processValue("This is a String"))
console.log(processValue(Math.PI))

// Union with null/undefined
let maybeUser: { name: string } | null = null;
maybeUser = { name: "Umer" }; // OK
console.log(maybeUser)
maybeUser = null
console.log(maybeUser)

// Intersection types (AND) - &
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeePerson = Person & Employee;
let employee: EmployeePerson = {
  name: "Umer",
  age: 28,
  employeeId: 123,
  department: "Engineering",
};
console.log(employee)

// Intersection with conflicting types
type StringAndNumber = string & number; // never (impossible)
