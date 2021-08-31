type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Azul' | 'Verde';
type CorCMYK = 'Roxo' | 'Magenta' | 'Branco' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Bruno',
  idade: 30,
  salario: 200000,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

setCorPreferida(pessoa, 'Vermelho');

export default 1;
