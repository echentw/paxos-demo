import * as React from 'react';

import { NodeState } from './AppState';


interface ComponentProps {
  nodeState: NodeState;
  initiatePaxos: (nodeId: number, proposedValue: string) => void;
  endDraftingProposal: () => void;
}

interface ComponentState {
  valueToPropose: string;
}

export default class ProposalModalComponent extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);

    this.state = { valueToPropose: '' };
  }

  handleChange = (event) => this.setState({ valueToPropose: event.target.value });

  handleCancel = (event) => {
    event.preventDefault();
    this.props.endDraftingProposal();
  }

  handlePropose = (event) => {
    event.preventDefault();
    if (this.state.valueToPropose.length > 0) {
      this.props.initiatePaxos(this.props.nodeState.id, this.state.valueToPropose);
      this.props.endDraftingProposal();
    }
  }

  render() {
    return (
      <form className="proposal-modal">
        <div>Enter a value to propose</div>
        <input
          className="proposal-input"
          type="text"
          autoFocus
          value={this.state.valueToPropose}
          onChange={this.handleChange}
        />
        <div className="proposal-buttons-container">
          <button className="propose-button" onClick={this.handlePropose}>Propose</button>
          <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}
