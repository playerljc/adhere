import React from 'react';
import PropTypes, { Requireable, InferType } from 'prop-types';

import { TabContext } from './Context';
import TabPanel from './TabPanel';

const selectorPrefix = 'adhere-ui-playground-simple-tabs';

/**
 * SimpleTabs
 * @class SimpleTabs
 * @classdesc 一个超级简单的选项卡
 */
class SimpleTabs extends React.PureComponent {
  static TabPanel = TabPanel;
  static defaultProps: { onChange: () => void; activeKey: string; className: string };
  static propTypes: {
    onChange: Requireable<(...args: any[]) => any>;
    activeKey: Requireable<NonNullable<InferType<Requireable<number> | any>>>;
    className: any;
  };

  constructor(props) {
    super(props);

    this.state = {
      activeKey: props.activeKey,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeKey: nextProps.activeKey,
    });
  }

  renderHead() {
    const { children } = this.props;
    return children instanceof Array
      ? children.map((t) => this.renderHeadItem(t))
      : // @ts-ignore
        this.renderHeadItem(children);
  }

  renderHeadItem({ props: { index, title } }) {
    // @ts-ignore
    const { onChange } = this.props;

    // @ts-ignore
    const { activeKey } = this.state;

    return (
      <li
        key={index}
        className={activeKey === index ? 'active' : ''}
        onClick={() => {
          this.setState(
            {
              activeKey: index,
            },
            () => {
              if (onChange) {
                onChange(index);
              }
            },
          );
        }}
      >
        {title}
      </li>
    );
  }

  render() {
    // @ts-ignore
    const { className, children } = this.props;

    return (
      // @ts-ignore
      <TabContext.Provider value={this.state}>
        <div className={`${selectorPrefix} ${className}`}>
          <ul className={`${selectorPrefix}-head`}>{this.renderHead()}</ul>
          <div className={`${selectorPrefix}-body`}>{children}</div>
        </div>
      </TabContext.Provider>
    );
  }
}

SimpleTabs.defaultProps = {
  activeKey: '',
  className: '',
  onChange: () => {},
};

SimpleTabs.propTypes = {
  activeKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default SimpleTabs;
