import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IAutoProps } from './types';
import { FlexContext } from './context';

const selectorPrefix = 'adhere-ui-flexlayout-auto';

/**
 * Auto
 * @class Auto
 * @classdesc Fixed
 */
class Auto extends React.Component<IAutoProps, any> {
  // @ts-ignore
  private props: IAutoProps | undefined;
  private direction: string | undefined;

  static defaultProps: any;
  static propTypes: any;

  constructor(props) {
    super(props);

    this.renderInner = this.renderInner.bind(this);
  }

  renderInner({ direction }) {
    this.direction = direction;

    // @ts-ignore
    const { children, autoFixed, className = '', style, fit } = this.props;

    return (
      <div
        className={classNames(
          selectorPrefix,
          `${autoFixed ? selectorPrefix + '-autoFixed' : ''}`,
          `${fit ? selectorPrefix + '-fit' : ''}`,
          className.split(' '),
        )}
        style={{ ...style }}
      >
        {children}
      </div>
    );
  }

  render() {
    return <FlexContext.Consumer>{this.renderInner}</FlexContext.Consumer>;
  }
}

Auto.defaultProps = {
  autoFixed: true,
  fit: true,
  className: '',
  style: {},
};

Auto.propTypes = {
  autoFixed: PropTypes.bool,
  fit: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Auto;
