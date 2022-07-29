import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  IFlexLayoutProps,
  IHorizontalFlexLayoutProps,
  IVerticalFlexLayoutProps,
  IToolBarLayoutProps,
  IBackLayoutProps,
  IFixedProps,
  IAutoProps,
} from './types';
import { FlexContext } from './context';

export const selectorPrefix = 'adhere-ui-flexlayout';

/**
 * FlexLayout
 * @class FlexLayout
 * @classdesc FlexLayout
 */
class FlexLayout extends React.Component<IFlexLayoutProps, any> {
  static propTypes: any;
  static defaultProps: any;

  static Fixed: (props: IFixedProps) => React.ReactElement;
  static Auto: (props: IAutoProps) => React.ReactElement;

  static Context = FlexContext;

  static selectorPrefix = selectorPrefix;

  static HorizontalFlexLayout: (props: IHorizontalFlexLayoutProps) => React.ReactElement;

  static VerticalFlexLayout: (props: IVerticalFlexLayoutProps) => React.ReactElement;

  static ToolBarLayout: (props: IToolBarLayoutProps) => React.ReactElement;

  static BackLayout: (props: IBackLayoutProps) => React.ReactElement;

  static HorizontalFlexLayoutDefaultProps: any;

  static HorizontalFlexLayoutPropTypes: any;

  static VerticalFlexLayoutDefaultProps: any;

  static VerticalFlexLayoutPropTypes: any;

  render(): React.ReactElement {
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
            ...(className || '').split(/\s+/),
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
