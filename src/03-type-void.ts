function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Beltrano',
  sobrenome: 'Silva',
  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Fulano', 'Cicrano');
pessoa.exibirNome();

export default pessoa;
