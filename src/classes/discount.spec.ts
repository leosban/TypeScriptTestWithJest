// Criando teste para product.ts

import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

// Factory function criada, para evitar repetição de código
// No caso de disount o params se refere a uma classe que ira retornar o Discount
const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Shoud have no discount', () => {
    const sut = createSut(NoDiscount);

    // Teste para o desconto não ser aplicado no valor
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('Shoud apply 50% discount', () => {
    const sut = createSut(FiftyPercentDiscount);

    // Teste para o desconto de 50%
    expect(sut.calculate(10.99)).toBeCloseTo(5.5);
  });

  it('Shoud apply 10% discount', () => {
    const sut = createSut(TenPercentDiscount);

    // Teste para o desconto de 10%
    expect(sut.calculate(150.5)).toBeCloseTo(135.45);
  });
});
