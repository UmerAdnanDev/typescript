//To run: npx ts-node 3-composite-types/5-interface.ts 
// Interfaces - similar to type aliases
interface IUser {
  id: number;
  name: string;
}

let user: IUser = {
  id: 1,
  name: "Umer",
};
console.log(user)
// Interface extending
interface IEmployee extends IUser {
  employeeId: number;
}

let employee: IEmployee = {
  id: 1,
  name: "Umer",
  employeeId: 123,
};
console.log(employee)

// Type alias extending (intersection)
type TUser = {
  id: number;
  name: string;
};

type TEmployee = TUser & {
  employeeId: number;
};

// Interface merging (same name = merges)
interface Settings {
  theme: string;
}
interface Settings {
  language: string;
}
// Settings now has both properties
let settings: Settings = {
  theme: "dark",
  language: "english",
};
console.log(settings)
// Type alias can't be merged (error)
// type TSettings = { theme: string };
// type TSettings = { language: string }; // Error

// When to use Interface vs Type
// Interface: Object shapes, classes, extending (use by default)
// Type: Unions, tuples, complex types, utility types

// Interface for classes (implements)
interface IVehicle {
  start(): void;
  stop(): void;
}

class Car implements IVehicle {
  start() {
    console.log("Car started");
  }
  stop() {
    console.log("Car stopped");
  }
}
let car = new Car();
car.start()
car.stop()
