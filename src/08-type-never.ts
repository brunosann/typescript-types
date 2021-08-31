export function criarError(): never {
  throw new Error('Erro qualquer');
}

criarError();
