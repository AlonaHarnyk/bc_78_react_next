// let a: unknown;
// a = 5;
// if(typeof a === "string") a.toUpperCase();

interface Car {
  engine: string;
  color: string;
  weight?: number;
  readonly number: string;
}

const car: Car = {
  engine: "v8",
  color: "red",
  weight: 2000,
  number: "ac2020",
};

const car1: Car = {
  engine: "v4",
  color: "red",
  number: "ac2025",
};

// car.color = "blue";

const arr: number[] = [1, 2, 3, 4];
const arr1: Array<number> = [1, 2, 3, 4];

const arr2: (number | string | boolean)[] = [1, "string", false];

const arr4: Car[] = [car, car1];

// const arr5 = arr4.map(({ engine, color }) => {
//       return { engine, color };

// });

const arr5 = arr4.map(({ engine, color }) => ({
  engine,
  color,
}));

type PromiseStatus = "pending" | "fulfilled" | "rejected";

let promiseStatus: PromiseStatus = "pending";

promiseStatus = "rejected";

interface PromiseType {
  status: PromiseStatus;
}

const promise: PromiseType = {
  status: "pending",
};

function func(name: string, age: number): void {
  console.log(`My name is ${name}, i am ${age} old`);
}

function func1(name: string, age: number): string {
  return `My name is ${name}, i am ${age} old`;
}

const hello = func1("Vadym", 16);

interface User {
  name: string;
  age: number;
  email: string;
  getName?: () => void;
}

function func2({ name, age }: User): string {
  return `My name is ${name}, i am ${age} old`;
}

const olga: User = {
  name: "Olga",
  age: 16,
  email: "test@gmail.com",
  getName: () => `My name is ${olga.name}`,
};

func2(olga);
if (olga.getName) olga.getName();
