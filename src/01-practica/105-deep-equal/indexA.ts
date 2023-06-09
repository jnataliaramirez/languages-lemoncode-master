console.log("************** PRACTICE 105 - APARATADO A *********************");

// *** ## Apartado 1

// --- types
interface User {
  name: string;
  age?: number;
  ciudad?: boolean;
}

interface IsEqual {
  <T>(a: T, b: T): boolean;
}

const user1: User = { name: "María", age: 30 };
const clonedUser1: User = { name: "María", age: 30 };

const isEqual: IsEqual = (a, b) => {
  // 1. Verificar si tienen la misma cantidad de claves:
  // a. Se sacan en un array las claves de los objetos, para verificar que tienen la misma longitud:
  const keysA: string[] = Object.keys(a);
  const keysB: string[] = Object.keys(b);

  // b. Se verifica que tengan el mismo número de claves:
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 2. Se verifica que los objetos tengan la misma clave y el mismo valor, sí alguno es diferente retornara un false.
  for (const key in a) {
    if (!b.hasOwnProperty(key) || b[key] !== a[key]) {
      return false;
    }
  }

  return true;
};

console.log("isEqual: ", isEqual(user1, clonedUser1)); // true
