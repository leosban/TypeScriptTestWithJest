// Faremos 2 tipos de testes: com valores primitivos e com objetos

// Dentro do describe, podemos colocar, quantos testes forem necessários,
// pois ele é usado para agrupar os testes

// Quando trabalhamos com o jest, sempre trabalhamos com afirmativas e
// asserções.

// 'toBe()' -> checa igualdade com 'Object.is' não funciona com objetos
// 'toEqual()' -> Sempre que checarmos um objeto, usamos o 'toEqual()'

describe('Primitive values', () => {
  it('Should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);

    expect(number).toEqual(10);

    // Checagem para que o número não seja nulo
    expect(number).not.toBeNull();

    // Checagem se o valor é booleano falso
    expect(number).not.toBeFalsy();

    // Checagem se o valor é booleano veradeiro
    expect(number).toBeTruthy();

    // Checagem se o valor é maior que
    expect(number).toBeGreaterThan(9);

    // Checagem se o valor é menor que
    expect(number).toBeLessThan(11);

    // Checagem se o valor é maior que ou igual
    expect(number).toBeGreaterThanOrEqual(10);

    // Checagem se o valor é menor ou igual
    expect(number).toBeLessThanOrEqual(10);

    // Checagem se o número está próximo de outro
    // Geralmente checaremos valores de ponto flutuante, aproximados
    expect(number).toBeCloseTo(9.997);

    // Checagem se na variável existe alguma propriedade
    expect(number).toHaveProperty('toString');
  });
});

// Exemplos com objetos

// Podemos usar '.not' para fazer a negação da checagem

describe('Objects', () => {
  it('Should test jest assertions with objects', () => {
    const person = { name: 'Leônidas', age: 32 };
    const anotherPerson = { ...person };

    // Usaremos 'toEqual()' para fazer a checagem
    expect(person).toEqual(anotherPerson);

    // Checagem se há uma propriedade dentro de um objeto
    // Nesse caso se há uma determinada chave dentro do objeto.
    expect(person).toHaveProperty('age');

    // Além disso podemos verificar se a propriedade existe e se possui um
    // valor
    expect(person).toHaveProperty('age', 32);

    // Checagem de chaves dentro do objeto
    expect(person.name).toBe('Leônidas');
  });
});
