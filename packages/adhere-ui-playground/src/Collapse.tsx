import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { ICollapseProps, ICollapseState } from './types';

const selectorPrefix = 'adhere-ui-playground-collapse';

class ReactNodeLike {}

class InferType<T> {}

/**
 * Collapse
 * @class Collapse
 * @classdesc Collapse
 */
// @ts-ignore
class Collapse extends React.Component<ICollapseProps, ICollapseState> {
  static propTypes: {
    border: Requireable<boolean>;
    headerClassName: Requireable<string>;
    fixedHeaderScrollBody: Requireable<boolean>;
    bodyClassName: Requireable<string>;
    extra: Requireable<ReactNodeLike>;
    defaultCollapse: Requireable<boolean>;
    bodyStyle: Requireable<object>;
    scrollY: Requireable<boolean>;
    title: Requireable<NonNullable<InferType<Requireable<ReactNodeLike> | Requireable<string>>>>;
    headerStyle: Requireable<object>;
  };

  static defaultProps: ICollapseProps;

  state: ICollapseState = {
    collapse: this.props.defaultCollapse,
  };

  componentWillReceiveProps(nextProps: Readonly<ICollapseProps>, nextContext: any) {
    if (this.state.collapse !== nextProps.defaultCollapse) {
      this.setState({
        collapse: nextProps.defaultCollapse,
      });
    }
  }

  protected onClickHeader = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  protected render() {
    const {
      headerClassName,
      headerStyle,
      bodyClassName,
      bodyStyle,
      children,
      title,
      extra,
      border,
      scrollY,
      fixedHeaderScrollBody,
    } = this.props;

    const { collapse } = this.state;

    return (
      <div
        className={classNames(
          selectorPrefix,
          scrollY ? `${selectorPrefix}-scroll-y` : '',
          fixedHeaderScrollBody ? `${selectorPrefix}-fixed-header-scroll-body` : '',
        )}
      >
        <div
          className={classNames(
            `${selectorPrefix}-header`,
            border ? `${selectorPrefix}-header-border` : '',
            headerClassName.split(/\s+/),
          )}
          style={{ ...headerStyle }}
          onClickCapture={this.onClickHeader}
        >
          <div className={`${selectorPrefix}-header-collapse`}>
            <div
              className={classNames(
                `${selectorPrefix}-header-collapse-icon`,
                collapse ? '' : `${selectorPrefix}-header-collapse-icon-close`,
              )}
            />
            <ConditionalRender conditional={!!title}>
              {() => <div className={`${selectorPrefix}-header-title`}>{title}</div>}
            </ConditionalRender>
          </div>

          <ConditionalRender conditional={!!extra}>
            {() => <div className={`${selectorPrefix}-header-extra`}>{extra}</div>}
          </ConditionalRender>
        </div>

        <ConditionalRender conditional={!collapse}>
          {() => (
            <div
              className={classNames(
                `${selectorPrefix}-body`,
                border ? `${selectorPrefix}-body-border` : '',
                bodyClassName.split(/\s+/),
                !!title || !!extra ? `${selectorPrefix}-body-exists-header` : '',
              )}
              style={{ ...bodyStyle }}
            >
              {children}
            </div>
          )}
        </ConditionalRender>
      </div>
    );
  }
}

Collapse.defaultProps = {
  headerClassName: '',
  headerStyle: {},
  bodyClassName: '',
  bodyStyle: {},
  title: null,
  extra: null,
  border: false,
  scrollY: false,
  defaultCollapse: false,
  fixedHeaderScrollBody: false,
};

Collapse.propTypes = {
  headerClassName: PropTypes.string,
  headerStyle: PropTypes.object,
  bodyClassName: PropTypes.string,
  bodyStyle: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  // @ts-ignore
  extra: PropTypes.node,
  defaultCollapse: PropTypes.bool,
  border: PropTypes.bool,
  scrollY: PropTypes.bool,
  fixedHeaderScrollBody: PropTypes.bool,
};

export default Collapse;
