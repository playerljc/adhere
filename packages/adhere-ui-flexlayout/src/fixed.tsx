import React, { RefObject } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IFixedProps } from './types';

// @ts-ignore
import { FlexContext } from './context';

const selectorPrefix = 'adhere-ui-flexlayout-fixed';

/**
 * Fixed
 * @class Fixed
 * @classdesc Fixed
 */
class Fixed extends React.Component<IFixedProps, any> {
  static defaultProps: any;
  static propTypes: any;

  // @ts-ignore
  private props: IFixedProps | undefined;
  private direction: string | undefined;
  private ref: RefObject<HTMLDivElement> | null | undefined;

  constructor(props) {
    super(props);

    this.renderInner = this.renderInner.bind(this);
  }

  getEl(): HTMLDivElement {
    return this?.ref?.current as HTMLDivElement;
  }

  renderInner({ direction }) {
    this.direction = direction;

    // @ts-ignore
    const { children, className, style, fit } = this.props;

    return (
      <div
        ref={this.ref}
        style={{ ...style }}
        className={classNames(
          selectorPrefix,
          `${fit ? selectorPrefix + '-fit' : ''}`,
          className.split(/\s+/),
        )}
      >
        {children}
      </div>
    );
  }

  render() {
    // @ts-ignore
    return <FlexContext.Consumer>{this.renderInner}</FlexContext.Consumer>;
  }
}

Fixed.defaultProps = {
  className: '',
  style: {},
  fit: true,
};

Fixed.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fit: PropTypes.bool,
};

export default Fixed;
