import { assert, expect, should } from 'chai';

import {
  Message,
  PrepareStageRequest,
} from '../src/lib/message';

import { PaxosNode } from '../src/lib/paxos_node';


describe('PaxosNode', () => {
  let nodes: Array<PaxosNode>;

  beforeEach((done) => {
    nodes = [
      new PaxosNode(0, 5),
      new PaxosNode(1, 5),
      new PaxosNode(2, 5),
      new PaxosNode(3, 5),
      new PaxosNode(4, 5),
    ];
    nodes.forEach((node) => node.initializeNodeList(nodes));
    done();
  });

  describe('Proposer', () => {
    it('should send a prepare message to everyone', (done) => {
      const requests: Array<Message> = nodes[0].sendPrepareRequest('juicy juicy burger');
      assert.lengthOf(requests, 4);
      assert.hasAllKeys(new Set(requests.map(r => r.toNode)), nodes.slice(1, 5));
      done();
    });

    it('should generate a new higher proposal number', (done) => {
      const message: PrepareStageRequest = {
        kind: 'PrepareStageRequest',
        toNode: nodes[0],
        fromNode: nodes[1],
        proposalNumber: 123,
      };

      const responses: Array<Message> = nodes[0].receivePrepareRequest(message);
      assert.lengthOf(responses, 1);

      const requests: Array<Message> = nodes[0].sendPrepareRequest('french fries');
      assert.lengthOf(requests, 4);
      requests.forEach((message: Message) => {
        assert.equal('PrepareStageRequest', message.kind);
        assert(message.proposalNumber > 123);
      });
      done();
    });

    it('should begin phase 2 after receiving from a majority', (done) => {
      let requests = nodes[0].sendPrepareRequest('milkshake');
      assert.lengthOf(requests, 4);

      const responses = [requests[0], requests[1]].map((request) => {
        const receiver = request.toNode;
        const responses = receiver.receiveMessage(request);
        assert.lengthOf(responses, 1);
        return responses[0];
      });
      assert.equal(2, responses.length);

      requests = nodes[0].receiveMessage(responses[0]);
      assert.lengthOf(requests, 0);

      requests = nodes[0].receiveMessage(responses[1]);
      assert.lengthOf(requests, 4);

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
