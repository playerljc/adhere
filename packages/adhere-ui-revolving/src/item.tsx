import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IRevolvingitemProps } from './types';

const selectorPrefix = 'adhere-ui-revolving-item';

class RevolvingItem extends React.Component<IRevolvingitemProps, any> {
  static defaultProps: any;
  static propTypes: any;

  render() {
    const { className, style } = this.props;

    return (
      <div
        className={classNames(
          selectorPrefix,
          'swiper-slide',
          // @ts-ignore
          className.split(' '),
        )}
        style={{ ...style }}
      >
        {this.props.children}
      </div>
    );
  }
}

RevolvingItem.defaultProps = {
  className: '',
  style: {},
};

RevolvingItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RevolvingItem;
