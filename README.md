# Paxos Demo
This Paxos demo is intended for learning purposes. This Paxos cluster has 5 nodes, which only has the capability to write one value once, and all subsequent queries must be reads. Figuring out how to extend the algorithm to support storing multiple key-value pairs, override an existing value, and other features are left as an exercise to the reader (because I can't be bothered to implement more features).

The implementation is based on the algorithm described in the [Paxos Made Simple](https://lamport.azurewebsites.net/pubs/paxos-simple.pdf) paper.

# To run yourself:
```
git clone https://github.com/echentw/paxos-demo
cd paxos-demo/
npm install
npm start
```
Then open `index.html` with your browser.
