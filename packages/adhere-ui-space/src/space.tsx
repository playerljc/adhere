import React from 'react';
import PropTypes from 'prop-types';

import ISpaceProps from './types';

const selectorPrefix = 'adhere-ui-space';

/**
 * Space
 * @class Space
 * @classdesc Space
 */
class Space extends React.Component<ISpaceProps, any> {
  getStyle() {
    const { direction, size } = this.props;

    if (direction === 'horizontal') {
      return {
        display: 'inline-block',
        height: '100%',
        margin: `0 ${size}px`,
      };
    }

    return {
      width: '100%',
      margin: `${size}px 0`,
    };
  }

  render(): React.ReactElement {
    const { className } = this.props;

    return <div className={`${selectorPrefix} ${className}`} style={this.getStyle()} />;
  }
}

Space.defaultProps = {
  direction: 'vertical',
  size: 20,
  className: '',
};

Space.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default Space;
