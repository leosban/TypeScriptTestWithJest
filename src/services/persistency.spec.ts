// Arquivo de teste criado para criar um test

// Podemos seperar testes em bloco para separar por descrição

// Podemos criar os testes com 'it()' ou 'test()', ambos são iguais

// Primeiro parametro descreve o teste, segundo parametro criamos a função

// Podemos inverter a checagem através do '.not' antes do '.toBe()

// Podemos de grupos de testes, dentro de uma suíte de testes, com o 'describe()'
// sendo o primeiro parametro a descrição, e o segundo params uma função, com os
// testes de fato.
// Dessa forma os testes ficam agrupados e mais fáceis de entender, se houver
// algum erro

describe('Testing something', () => {
  it('Should return one', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('Testing another something', () => {
  test('Should return a name', () => {
    const name = 'Leônidas';
    expect(name).toBe('Leônidas');
  });
});
