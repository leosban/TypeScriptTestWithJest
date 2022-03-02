// Testando a classe persistency com SpyOn
import { Persistency } from './persistency';

describe('Persistency', () => {
  // Método para limpar os mocks, depois de cada teste
  afterEach(() => jest.clearAllMocks());

  it('Shoud return undefined', () => {
    // Sempre chamamos a classe que está sendo testada de SUT-(System under test)
    const sut = new Persistency();

    // Checagem se o 'saveOrder()' dentro de persistency, seja undefined.
    expect(sut.saveOrder()).toBeUndefined();
  });

  // Teste para checagem de uma chamada do console.log
  it('Shoud call console.log once', () => {
    // Sempre chamamos a classe que está sendo testada de SUT-(System under test)
    const sut = new Persistency();

    // Variável criada como espiã do 'console.log'
    // passamos o objeto 'console' e o método vem entre aspas
    const consoleSpy = jest.spyOn(console, 'log');

    // Chamada da sut.saveOrder(), para fazer com que a checagem funcione
    // para que o 'console.log' seja chamado, pelo menos uma vez
    sut.saveOrder();

    // Checagem do números de vezes que a variável irá ser chamada
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  // Teste de uma segunda chamada do 'console.log' com o método 'afterEach()'
  // implementado
  // Irá fazer a checagem da msg dentro do 'console.log' dentro da função
  it('Shoud call console.log with "Order saved successfully"', () => {
    // Sempre chamamos a classe que está sendo testada de SUT-(System under test)
    const sut = new Persistency();

    // Variável criada como espiã do 'console.log'
    // passamos o objeto 'console' e o método 'log' entre aspas
    const consoleSpy = jest.spyOn(console, 'log');

    // Chamada da sut.saveOrder(), para fazer com que a checagem funcione
    // para que o 'console.log' seja chamado
    sut.saveOrder();

    // Checagem da msg dentro do console.log
    expect(consoleSpy).toHaveBeenCalledWith('Order saved successfully');
  });
});
