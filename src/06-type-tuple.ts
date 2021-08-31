const dadosCliente: readonly [number, string] = [1, 'Bruno'];
const dadosCliente2: [number, string, ...string[]] = [2, 'Fulano'];

dadosCliente2[0] = 5;
dadosCliente2[1] = 'Meu Nome';

console.log(dadosCliente);
console.log(dadosCliente2);
