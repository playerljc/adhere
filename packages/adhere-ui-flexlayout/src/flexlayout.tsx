import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IFlexLayoutProps } from './types';
// @ts-ignore
import { FlexContext } from './context';

import Fixed from './fixed';
import Auto from './auto';

export const selectorPrefix = 'adhere-ui-flexlayout';

/**
 * FlexLayout
 * @class FlexLayout
 * @classdesc FlexLayout
 */
class FlexLayout extends React.Component<IFlexLayoutProps, any> {
  static propTypes: any;
  static defaultProps: any;

  static Fixed = Fixed;
  static Auto = Auto;

  // @ts-ignore
  private props: IFlexLayoutProps | undefined;

  render() {
    // @ts-ignore
    const { className, direction, children, style } = this.props;

    return (
      <FlexContext.Provider
        value={{
          direction,
        }}
      >
        <div
          className={classNames(
            selectorPrefix,
            `${selectorPrefix}-${direction}`,
            ...className.split(' '),
          )}
          style={{ ...style }}
        >
          {children}
        </div>
      </FlexContext.Provider>
    );
  }
}

FlexLayout.defaultProps = {
  direction: 'vertical',
  className: '',
  style: {},
};

FlexLayout.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default FlexLayout;
