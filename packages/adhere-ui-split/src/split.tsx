import React from 'react';
import PropTypes from 'prop-types';

import ISplitProps from './types';

const selectorPrefix = 'adhere-ui-split';

/**
 * Split
 * @class Split
 * @classdesc Split
 */
class Split extends React.Component<ISplitProps, any> {
  getStyle() {
    const { direction, size } = this.props;

    if (direction === 'horizontal') {
      return {
        display: 'inline-block',
        width: 1,
        height: '100%',
        margin: `0 ${size}px`,
      };
    }

    return {
      width: '100%',
      height: 1,
      margin: `${size}px 0`,
    };
  }

  render(): React.ReactElement {
    const { className } = this.props;

    return <div className={`${selectorPrefix} ${className}`} style={this.getStyle()} />;
  }
}

Split.defaultProps = {
  direction: 'vertical',
  size: 20,
  className: '',
};

Split.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default Split;
