import { assert, expect, should } from 'chai';

import {
  Message,
  PrepareStageRequest,
  PrepareStageResponse,
  AcceptStageRequest,
  AcceptStageResponse,
} from '../src/lib/message_types';

import MessagePool from '../src/lib/message_pool';
import PaxosNode from '../src/lib/paxos_node';


describe('MessagePool', () => {
  let messagePool: MessagePool;
  let nodes: Array<PaxosNode>;

  beforeEach(() => {
    messagePool = new MessagePool();
    nodes = [
      new PaxosNode(0, 5),
      new PaxosNode(1, 5),
      new PaxosNode(2, 5),
      new PaxosNode(3, 5),
      new PaxosNode(4, 5),
    ];
    nodes.forEach((node) => node.initializeNodeIds(nodes.map((node) => node.getId())));
  });

  it('should generate a unique id for each message', () => {
    const id1 = messagePool.addMessage(<PrepareStageRequest>{
      kind: 'PrepareStageRequest',
      fromNodeId: nodes[0].getId(),
      toNodeId: nodes[1].getId(),
      proposalNumber: 1,
    });
    const id2 = messagePool.addMessage(<PrepareStageRequest>{
      kind: 'PrepareStageRequest',
      fromNodeId: nodes[0].getId(),
      toNodeId: nodes[1].getId(),
      proposalNumber: 1,
    });
    assert.notEqual(id1, id2);
  });

  it('should be able to retrieve a message', () => {
    const message: PrepareStageRequest = {
      kind: 'PrepareStageRequest',
      fromNodeId: nodes[0].getId(),
      toNodeId: nodes[1].getId(),
      proposalNumber: 1,
    };
    const id = messagePool.addMessage(message);
    const retrievedMessage = messagePool.retrieveMessage(id);
    assert.equal(retrievedMessage, message);
  });

  it('should not be able to retrieve same message twice', () => {
    const message: PrepareStageRequest = {
      kind: 'PrepareStageRequest',
      fromNodeId: nodes[0].getId(),
      toNodeId: nodes[1].getId(),
      proposalNumber: 1,
    };
    const id = messagePool.addMessage(message);
    const retrievedMessage = messagePool.retrieveMessage(id);
    assert.equal(retrievedMessage, message);

    const retrievedMessageAgain = messagePool.retrieveMessage(id);
    assert.isNull(retrievedMessageAgain);
  });

  it('should not be able to retrieve a message after clearing', () => {
    const message: PrepareStageRequest = {
      kind: 'PrepareStageRequest',
      fromNodeId: nodes[0].getId(),
      toNodeId: nodes[1].getId(),
      proposalNumber: 1,
    };
    const id = messagePool.addMessage(message);

    messagePool.clear();

    const retrievedMessage = messagePool.retrieveMessage(id);
    assert.isNull(retrievedMessage);
  });

  it('should not be able to retrieve message after dropping', () => {
    const message: PrepareStageRequest = {
      kind: 'PrepareStageRequest',
      fromNodeId: nodes[0].getId(),
      toNodeId: nodes[1].getId(),
      proposalNumber: 1,
    };
    const id = messagePool.addMessage(message);

    const success = messagePool.dropMessage(id);

    const retrievedMessage = messagePool.retrieveMessage(id);
    assert.isNull(retrievedMessage);
  });
});
