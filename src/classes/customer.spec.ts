// Criando teste para customer.ts

import { IndividualCustomer, EnterpriseCustomer } from './customer';

//Factory function de IndividualCustomer
const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

//Factory function de EnterpriseCustomer
const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

// Função para limpar os mocks depois de cada teste
afterEach(() => jest.clearAllMocks());

// Teste de Individual Customer
describe('IndividualCustomer', () => {
  it('Shoud have fisrtName, lastName and cpf', () => {
    const sut = createIndividualCustomer(
      'Leônidas',
      'Junior',
      '111.111.111-11',
    );

    // Teste para verificar a primeira propriedade
    expect(sut).toHaveProperty('firstName', 'Leônidas');

    // Teste para verificar a segunda propriedade
    expect(sut).toHaveProperty('lastName', 'Junior');

    // Teste para verificar a terceira propriedade
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('Shoud have methods to get name and idn for Individual Customer', () => {
    const sut = createIndividualCustomer(
      'Leônidas',
      'Junior',
      '111.111.111-11',
    );

    // Teste para verificar o metodo getName();
    expect(sut.getName()).toBe('Leônidas Junior');

    // Teste para verificar o metodo getIDN();
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

// Teste de Enterprise Customer
describe('EnterpriseCustomer', () => {
  it('Shoud have Name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '11.111.111/0001-11');

    // Teste para verificar a primeira propriedade
    expect(sut).toHaveProperty('name', 'Udemy');

    // Teste para verificar a segunda propriedade
    expect(sut).toHaveProperty('cnpj', '11.111.111/0001-11');
  });

  it('Shoud have methods to get name and idn for Enterprise Customer', () => {
    const sut = createEnterpriseCustomer('Udemy', '11.111.111/0001-11');

    // Teste para verificar o metodo getName();
    expect(sut.getName()).toBe('Udemy');

    // Teste para verificar o metodo getIDN();
    expect(sut.getIDN()).toBe('11.111.111/0001-11');
  });
});
