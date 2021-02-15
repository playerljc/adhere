import React from 'react';
import PropTypes from 'prop-types';

import { ISpaceProps } from './types';

const selectorPrefix = 'adhere-ui-space';

/**
 * SpaceGroup
 * @class SpaceGroup
 * @classdesc SpaceGroup
 */
class SpaceGroup extends React.Component<ISpaceProps, any> {
  static defaultProps: any;
  static propTypes: any;

  render() {
    const { children, ...others } = this.props;

    return (
      <>
        {
          // @ts-ignore
          children.map((component, index) => {
            if (index !== 0) {
              // @ts-ignore
              return (
                <>
                  <Space {...others} key={index} />
                  {component}
                </>
              );
            }

            return component;
          })
        }
      </>
    );
  }
}

SpaceGroup.defaultProps = {
  direction: 'vertical',
  size: 20,
  className: '',
};

SpaceGroup.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

/**
 * Space
 * @class Space
 * @classdesc Space
 */
class Space extends React.Component<ISpaceProps, any> {
  static defaultProps: any;
  static propTypes: any;
  static Group = SpaceGroup;

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
