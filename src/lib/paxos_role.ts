import {
  PrepareRequest,
  PrepareResponse,
  AcceptRequest,
  AcceptResponse,
  Message,
} from './message_types';

export default abstract class PaxosRole {
  receiveMessage(message: Message): Array<Message> {
    switch(message.kind) {
      case 'PrepareRequest': return this.receivePrepareRequest(message);
      case 'PrepareResponse': return this.receivePrepareResponse(message);
      case 'AcceptRequest': return this.receiveAcceptRequest(message);
      case 'AcceptResponse': return this.receiveAcceptResponse(message);
      default: return [];
    }
  }

  protected abstract receivePrepareRequest(message: PrepareRequest): Array<Message>;
  protected abstract receivePrepareResponse(message: PrepareResponse): Array<Message>;
  protected abstract receiveAcceptRequest(message: AcceptRequest): Array<Message>;
  protected abstract receiveAcceptResponse(message: AcceptResponse): Array<Message>;
}
