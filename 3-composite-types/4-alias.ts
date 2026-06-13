// To run: npx ts-node 3-composite-types/4-alias.ts 
// Type aliases - reusable type definitions
type User = {
  id: number;
  name: string;
  email: string;
};

let user1: User = {
  id: 1,
  name: "Umer",
  email: "umer@example.com",
};
console.log(user1)
let user2: User = {
  id: 2,
  name: "Ali",
  email: "ali@example.com",
};
console.log(user2)

// Type alias for union
type ID = string | number;
let userId: ID = "abc123";
console.log(userId)
userId = 456; // OK
console.log(userId)

// Type alias for function
type GreetFunction = (name: string) => string;
const greet: GreetFunction = (name) => `Hello ${name}`;
greet("Kinza")

// Type alias for tuple
type Coordinate = [number, number];
let point: Coordinate = [10, 20];
console.log(point)

// Type alias with generics (advanced)
type Container<T> = {
  value: T;
  timestamp: Date;
};

let stringContainer: Container<string> = {
  value: "hello",
  timestamp: new Date(),
};
console.log(stringContainer)

// Reusing type aliases
type Address = {
  street: string;
  city: string;
};

type UserWithAddress = User & {
  address: Address;
};

let fullUser: UserWithAddress = {
  id: 1,
  name: "Umer",
  email: "umer@example.com",
  address: {
    street: "123 Main St",
    city: "Karachi",
  },
};
console.log(fullUser)