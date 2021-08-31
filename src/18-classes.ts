export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpf: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpf = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaborados(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Google', '20.506.068/0001-54');
const colaborador1 = new Colaborador('Funalo', 'Silva');
const colaborador2 = new Colaborador('Cicrano', 'Santos');
const colaborador3 = new Colaborador('Beltrano', 'Ribeiro');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaborados();
