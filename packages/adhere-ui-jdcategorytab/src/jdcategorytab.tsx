import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll';

import { IJdCategoryTabProps, IJdCategoryTabState } from './types';
import JdCategoryTabItem from './item';
import { JdCategoryContext } from './context';

const selectorPrefix = 'adhere-ui-jdcategorytab';

/**
 * JdCategoryTab
 * @class JdCategoryTab
 * @classdesc JdCategoryTab
 */
class JdCategoryTab extends React.Component<IJdCategoryTabProps, IJdCategoryTabState> {
  static defaultProps: any;
  static propTypes: any;
  private el: HTMLDivElement | null | undefined;
  private menuEl: HTMLDivElement | null | undefined;
  private scroll: IScroll;
  private ease = IScroll.utils.ease;
  private menuInnerEl: HTMLUListElement | null | undefined;
  static Item = JdCategoryTabItem;

  constructor(props) {
    super(props);

    this.state = {
      activeKey: this.props.activeKey,
    };
  }

  componentDidMount() {
    this.initMenuScroll();
  }

  componentWillReceiveProps(nextProps: Readonly<IJdCategoryTabProps>, nextContext: any) {
    if (nextProps.activeKey !== this.state.activeKey) {
      this.setState({
        activeKey: nextProps.activeKey,
      });
    }
  }

  componentDidUpdate(
    prevProps: Readonly<IJdCategoryTabProps>,
    prevState: Readonly<IJdCategoryTabState>,
    snapshot?: any,
  ) {
    if (prevState.activeKey !== this.state.activeKey) {
      // @ts-ignore
      this.scrollTo(this.state.activeKey);
    }
  }

  private initMenuScroll() {
    this.scroll = new IScroll(this.menuEl, { mouseWheel: true, click: true });

    // @ts-ignore
    this.menuEl.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
  }

  private findElByKey(key) {
    const index = this.props.menuData.findIndex((t) => t.key === key);

    console.log('index', index);

    // @ts-ignore
    const arr = Array.from(this.menuInnerEl?.querySelectorAll(`.${selectorPrefix}-menu-item`));

    if (arr.length) {
      return arr[index];
    }

    return null;
  }

  scrollTo(key, time = 250, easing) {
    easing = easing || this.ease.circular;

    let isCan = true;

    if (this.props.onBeforeChange) {
      isCan = this.props.onBeforeChange(this.state.activeKey, key);
    }

    if (!isCan) return;

    console.log(this.state.activeKey, key, time);

    this.scroll.scrollToElement(this.findElByKey(key), time, null, null, easing);

    setTimeout(() => {
      console.log('setTimeout');

      this.setState(
        {
          activeKey: key,
        },
        () => {
          console.log('setTimeoutEnd');

          if (this.props.onChange) {
            this.props.onChange(key);
          }
        },
      );
    }, time);
  }

  private renderMenu() {
    const { menuData, menuItemClassName, menuItemStyle, renderMenuItem } = this.props;

    const { activeKey } = this.state;

    return menuData.map((data) => {
      if (renderMenuItem) {
        return (
          <li
            key={data.key}
            className={classNames(
              `${selectorPrefix}-menu-item`,
              activeKey === data.key ? 'active' : null,
              // @ts-ignore
              menuItemClassName.split(' '),
            )}
            style={{ ...menuItemStyle }}
          >
            <a
              onClick={(e) => {
                console.log('click', e.target, data);
                // @ts-ignore
                this.scrollTo(data.key);
              }}
            >
              {renderMenuItem(data)}
            </a>
          </li>
        );
      }

      return (
        <li
          key={data.key}
          className={classNames(
            `${selectorPrefix}-menu-item`,
            activeKey === data.key ? 'active' : null,
            // @ts-ignore
            menuItemClassName.split(' '),
          )}
          style={{ ...menuItemStyle }}
        >
          <a
            onClick={(e) => {
              console.log('click', e.target, data);
              // @ts-ignore
              this.scrollTo(data.key);
            }}
          >
            {data.name}
          </a>
        </li>
      );
    });
  }

  render() {
    console.log('render');

    // @ts-ignore
    const {
      className,
      style,
      menuClassName,
      menuStyle,
      menuInnerClassName,
      menuInnerStyle,
      tabClassName,
      tabStyle,
      children,
    } = this.props;

    // @ts-ignore
    return (
      <JdCategoryContext.Provider
        value={{
          activeKey: this.state.activeKey,
        }}
      >
        <div
          className={classNames(
            selectorPrefix,
            // @ts-ignore
            className.split(' '),
          )}
          style={{ ...style }}
          ref={(el) => (this.el = el)}
        >
          <div
            ref={(el) => (this.menuEl = el)}
            className={classNames(
              `${selectorPrefix}-menu`,
              // @ts-ignore
              menuClassName.split(' '),
            )}
            style={{ ...menuStyle }}
          >
            <ul
              ref={(el) => (this.menuInnerEl = el)}
              className={classNames(
                `${selectorPrefix}-menu-inner`,
                // @ts-ignore
                menuInnerClassName.split(' '),
              )}
              style={{ ...menuInnerStyle }}
            >
              {this.renderMenu()}
            </ul>
          </div>
          <ul
            className={classNames(
              `${selectorPrefix}-tab`,
              // @ts-ignore
              tabClassName.split(' '),
            )}
            style={{ ...tabStyle }}
          >
            {children}
          </ul>
        </div>
      </JdCategoryContext.Provider>
    );
  }
}

JdCategoryTab.defaultProps = {
  className: '',
  style: {},
  menuClassName: '',
  menuStyle: {},
  menuInnerClassName: '',
  menuInnerStyle: {},
  tabClassName: '',
  tabStyle: {},
  menuItemClassName: '',
  menuItemStyle: {},
  menuData: [],
  activeKey: '',
  renderMenuItem: undefined,
  onBeforeChange: () => true,
  onChange: () => {},
};

JdCategoryTab.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  menuClassName: PropTypes.string,
  menuStyle: PropTypes.object,
  menuInnerClassName: PropTypes.string,
  menuInnerStyle: PropTypes.object,
  tabClassName: PropTypes.string,
  tabStyle: PropTypes.object,
  menuItemClassName: PropTypes.string,
  menuItemStyle: PropTypes.object,
  menuData: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      properties: PropTypes.object,
    }),
  ),
  activeKey: PropTypes.string,
  renderMenuItem: PropTypes.func,
  onBeforeChange: PropTypes.func,
  onChange: PropTypes.func,
};

export default JdCategoryTab;
