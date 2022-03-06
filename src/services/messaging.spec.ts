import { Messaging } from './messaging';

// Factory function criada, para evitar repetição de código
const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('Shoud return undefined', () => {
    const sut = createSut();

    expect(sut.sendMessage('Test')).toBeUndefined();
  });

  it('Shoud call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('Test');

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Shoud call console.log with "Message sent:", msg', () => {
    const sut = createSut();

    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Test');

    expect(consoleSpy).toHaveBeenCalledWith('Message sent:', 'Test');
  });
});
