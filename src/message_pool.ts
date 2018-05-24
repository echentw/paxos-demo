import { Message } from './message';

class MessagePool {
  private messagesById: Map<string, Message>;

  constructor() {
    this.messagesById = new Map<string, Message>();
  }

  _uniqueId(): string {
    return 'id_' + Math.random().toString(36).substr(2, 9);
  }

  addMessage(message: Message): void {
    const id = this._uniqueId();
    this.messagesById.set(id, message);
  }

  removeMessage(id: string): void {
    this.messagesById.delete(id);
  }
}
