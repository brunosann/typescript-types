export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.join(' ');
}

export function myUpperCase(...args: string[]): string[] {
  return args.map((str) => str.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('Fulano', 'beltrano');
const upper = myUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);
