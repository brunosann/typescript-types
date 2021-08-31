enum Cores {
  VERMELHO = 10,
  VERDE = 50,
  Azul = 100,
}

enum Cores {
  Roxo = 'Roxo',
  Amarelo = 101,
}

function ecolharACor(cor: Cores): void {
  console.log(Cores[cor]);
}

ecolharACor(Cores.Azul);
// ecolharACor(12);
