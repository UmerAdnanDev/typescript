// To run: npx ts-node 3-composite-types/2-object.ts 
// Basic object type
let user: {
  name: string;
  age: number;
} = {
  name: "Umer",
  age: 28,
};
console.log(user)

// Optional properties
let product: {
  name: string;
  price: number;
  description?: string; // Optional
} = {
  name: "Laptop",
  price: 999,
};
console.log(product)

// Readonly properties
let config: {
  readonly apiUrl: string;
  timeout: number;
} = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};
// config.apiUrl = "new-url"; // Error
console.log(config)

// Index signatures (dynamic property names)
let dictionary: {
  [key: string]: number;
} = {
  apple: 5,
  banana: 3,
};
dictionary.orange = 7; // OK
console.log(dictionary)

// Nested objects
let company: {
  name: string;
  address: {
    street: string;
    city: string;
    zipCode: number;
  };
} = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "Karachi",
    zipCode: 12345,
  },
};
console.log(company)
console.log(company.address)

// Function in object
let calculator: {
  add: (a: number, b: number) => number;
} = {
  add: (a, b) => a + b,
};
console.log(calculator)
console.log(calculator.add(1,2))