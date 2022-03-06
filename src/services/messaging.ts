// Classe com o metodo com o serviço mensageiro
// Para facilitar a manutenção do código

import { MessagingProtocol } from '../classes/interfaces/messagingProtocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Message sent:', msg);
  }
}
