import * as assert from 'assert';

import {
  Message,
  PrepareStageRequest,
} from '../src/message';

import { MessagePool } from '../src/message_pool';
import { PaxosNode } from '../src/paxos_node';

describe('PaxosNode', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      const asdf: string = 'asdf';
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('PaxosNode', () => {
  let messagePool: MessagePool;
  let nodes: Array<PaxosNode>;

  beforeEach((done) => {
    messagePool = new MessagePool();
    nodes = [
      new PaxosNode(messagePool, 0, 5),
      new PaxosNode(messagePool, 1, 5),
      new PaxosNode(messagePool, 2, 5),
      new PaxosNode(messagePool, 3, 5),
      new PaxosNode(messagePool, 4, 5),
    ];
    nodes.forEach((node) => node.initializeNodeList(nodes));
    done();
  });


  describe('Proposer', () => {
    it('should generate a new higher proposal number', (done) => {
      const message: PrepareStageRequest = {
        kind: 'PrepareStageRequest',
        toNode: nodes[0],
        fromNode: nodes[1],
        proposalNumber: 123,
      };
      nodes[0].receivePrepareRequest(message);
      messagePool.clear();

      nodes[0].sendPrepareRequest('juicy juicy burger');
      messagePool.messagesById.forEach((message: Message, id: string, map) => {
        assert.equal(message.kind, 'PrepareStageRequest');
        assert(message.proposalNumber > 123);
      });
      done();
    });

    it('should send a prepare message to everyone', (done) => {
      nodes[0].sendPrepareRequest('wand');
      assert.equal(messagePool.messagesById.size, 4);
      done();
    });
  });

  describe('Receiver', () => {
    it('should blah', () => {
      assert.equal(1, 1);
    });

  });

  describe('Learner', () => {
    it('should blah', () => {
      assert.equal(1, 1);
    });
  });
});
