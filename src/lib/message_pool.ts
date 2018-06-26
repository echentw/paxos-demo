import { Message } from './message_types';


export interface IdMessagePair {
  id: string,
  message: Message,
}

export default class MessagePool {
  public idMessagePairs: Array<IdMessagePair>;

  constructor() {
    this.idMessagePairs = [];
  }

  _uniqueId(): string {
    return 'id_' + Math.random().toString(36).substr(2, 9);
  }

  addMessage(message: Message): string {
    const id = this._uniqueId();
    this.idMessagePairs.push({
      id: id,
      message: message,
    });
    return id;
  }

  // TODO: make this more efficient
  peekMessage(id: string): Message | null {
    const messages = this.idMessagePairs
      .filter((pair) => pair.id === id)
      .map((pair) => pair.message);
    if (messages.length > 0) {
      return messages[0];
    } else {
      return null;
    }
  }

  retrieveMessage(id: string): Message | null {
    const messages = this.idMessagePairs
      .filter((pair) => pair.id === id)
      .map((pair) => pair.message);
    if (messages.length > 0) {
      this.idMessagePairs = this.idMessagePairs.filter((pair) => pair.id !== id);
      return messages[0];
    } else {
      return null;
    }
  }

  getMessages(): Array<Message> {
    return this.idMessagePairs.map((pair) => pair.message);
  }

  dropMessage(id: string): void {
    this.idMessagePairs = this.idMessagePairs.filter((pair) => pair.id !== id);
  }

  clear(): void {
    this.idMessagePairs = [];
  }

  getIdMessagePairsToNodeId(nodeId: number): Array<IdMessagePair> {
    return this.idMessagePairs.filter((pair) => pair.message.headers.toNodeId === nodeId);
  }
}
