console.log("************** DELIVERABLE 03 *********************");

// --- Types
interface Information {
  name: string;
  surname?: string;
  country?: string;
  age?: number;
  married?: boolean;
}

// ---
const a: Information = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: Information = { name: "Luisa", age: 31, married: true };

//  * -->  Clone

const clone = <T>(source: T): T => ({ ...source });
console.log("clone()", clone(a));

//  * -->  Merge

const merge = <T, U>(source: T, target: U): T | U => ({
  ...clone(target),
  ...clone(source),
});
console.log("merge()", merge(a, b));