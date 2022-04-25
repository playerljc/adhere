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

  /**
   * reMount
   * @description 重新渲染
   */
  reMount() {
    this.setState({ renderDOM: null }, () => {
      this.setState({ renderDOM: this.props.children });
    });
  }

  render() {
    return this.state.renderDOM;
  }
}

export default ForceUpdate;
