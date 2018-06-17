import {
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
  Message,
} from './message_types';

export default abstract class PaxosRole {
  receiveMessage(message: Message): Array<Message> {
    switch(message.kind) {
      case 'PrepareStageRequest': return this.receivePrepareRequest(message);
      case 'PrepareStageResponse': return this.receivePrepareResponse(message);
      case 'AcceptStageRequest': return this.receiveAcceptRequest(message);
      case 'AcceptStageResponse': return this.receiveAcceptResponse(message);
      default: return [];
    }
  }

  protected abstract receivePrepareRequest(message: PrepareStageRequest): Array<Message>;
  protected abstract receivePrepareResponse(message: PrepareStageResponse): Array<Message>;
  protected abstract receiveAcceptRequest(message: AcceptStageRequest): Array<Message>;
  protected abstract receiveAcceptResponse(message: AcceptStageResponse): Array<Message>;
}
