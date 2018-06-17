import MessagePool from './message_pool';
import PaxosNode from './paxos_node';

export default class Paxos {
  public messagePool: MessagePool;
  public nodes: Array<PaxosNode>;

  getNodeById(id: number) {
    return this.nodes.find((node) => node.getId() === id);
  }

  constructor(size: number) {
    this.messagePool = new MessagePool();
    this.nodes = new Array(size).fill(0).map((_, index) => new PaxosNode(index, size));
    this.nodes.forEach((node) => {
      node.initializeNodeIds(this.nodes.map((node) => node.getId()))
    });
  }
}
