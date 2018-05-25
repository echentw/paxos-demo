import { Message } from './message';
import { PaxosNode } from './paxos_node';

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

  deliverMessage(id: string): void {
    const message = this.messagesById.get(id);
    this.messagesById.delete(id);

    if (message) {
      const receiverNode: PaxosNode = message.toNode;
      receiverNode.receiveMessage(message);
    }
  }

  dropMessage(id: string): void {
    this.messagesById.delete(id);
  }

  clear(): void {
    this.messagesById.clear();
  }
}
