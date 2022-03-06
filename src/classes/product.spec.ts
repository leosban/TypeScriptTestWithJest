// Criando teste para product.ts

import { Product } from './product';

// Factory function criada, para evitar repetição de código
// No caso de product recebe dois params: name e price
const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Shoud have properties name and price', () => {
    const sut = createSut('T-shirt', 49.9);
    expect(sut).toHaveProperty('name', 'T-shirt');

    // Testamos valores de ponto flutuante com toBeCloseTo
    expect(sut.price).toBeCloseTo(49.9);
  });
});
