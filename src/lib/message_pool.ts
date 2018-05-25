import { Message } from './message';


export class MessagePool {
  public messagesById: Map<string, Message>;

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

  retriveMessage(id: string): Message {
    const message = this.messagesById.get(id);
    this.messagesById.delete(id);
    return message;
  }

  dropMessage(id: string): boolean {
    return this.messagesById.delete(id);
  }

  clear(): void {
    this.messagesById.clear();
  }
}
