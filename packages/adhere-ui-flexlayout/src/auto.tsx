import React, { RefObject } from 'react';
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
  private direction: string | undefined;
  private ref: RefObject<HTMLDivElement> | null | undefined;

  static defaultProps: any;
  static propTypes: any;

  constructor(props) {
    super(props);

    this.renderInner = this.renderInner.bind(this);
  }

  getEl(): HTMLDivElement {
    return this?.ref?.current as HTMLDivElement;
  }

  renderInner({ direction }) {
    this.direction = direction;

    const { children, autoFixed, className = '', style, fit } = this.props;

    return (
      <div
        ref={this.ref}
        className={classNames(
          selectorPrefix,
          `${autoFixed ? selectorPrefix + '-autoFixed' : ''}`,
          `${fit ? selectorPrefix + '-fit' : ''}`,
          className.split(/\s+/),
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
  children: PropTypes.any,
};

export default Auto;
