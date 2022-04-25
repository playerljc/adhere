import React from 'react';

import { IForceUpdateStates } from './types';

/**
 * ForceUpdate
 * @class ForceUpdate
 * @classdesc ForceUpdate
 */
class ForceUpdate extends React.Component<void, IForceUpdateStates> {
  state = {
    renderDOM: this.props.children,
  };

  remount() {
    this.setState({ renderDOM: null }, () => {
      this.setState({ renderDOM: this.props.children });
    });
  }

  render() {
    return <div>{this.state.renderDOM}</div>;
  }
}

export default ForceUpdate;
