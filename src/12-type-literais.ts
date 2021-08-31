let x = 10; // eslint-disable-line
x = 0b1010;

const y = 50;

let a: 100 = 100; // eslint-disable-line
let aa = 100 as const; // eslint-disable-line

const person = {
  name: 'Bruno' as const,
  lastName: 'Santos',
};

// person.name = 'Fulano'

function selectColor(color: 'Vermelho' | 'Azul' | 'Verde') {
  return color;
}

console.log(selectColor('Verde'));

// module mode
export default 1;
