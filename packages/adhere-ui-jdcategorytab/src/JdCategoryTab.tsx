import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll';
import React, { forwardRef, memo, useEffect, useImperativeHandle, useRef } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';

import JdCategoryTabItem from './Item';
import type { JdCategoryTabComponent, JdCategoryTabProps, JdCategoryTabRefHandle } from './types';

const selectorPrefix = 'adhere-ui-jd-category-tab';

const { useSetState } = Hooks;

const InternalJdCategoryTab = memo<JdCategoryTabProps>(
  forwardRef<JdCategoryTabRefHandle, JdCategoryTabProps>((props, ref) => {
    const {
      className = '',
      style = {},
      menuClassName = '',
      menuStyle = {},
      menuInnerClassName = '',
      menuInnerStyle = {},
      tabClassName = '',
      tabStyle = {},
      menuData = [],
      menuItemClassName = '',
      menuItemStyle = {},
      renderMenuItem,
      onBeforeChange,
      onChange,
      children,
    } = props;

    const [activeKey, setActiveKey] = useSetState(props.activeKey);

    const ease = useRef(IScroll.utils.ease);
    const el = useRef<HTMLDivElement | null>(null);
    const menuEl = useRef<HTMLDivElement | null>(null);
    const menuInnerEl = useRef<HTMLUListElement | null>(null);
    const scroll = useRef<IScroll>();

    function findElByKey(key) {
      const index = menuData.findIndex((t) => t.key === key);

      const arr = Array.from(
        (menuInnerEl.current as HTMLUListElement).querySelectorAll(`.${selectorPrefix}-menu-item`),
      );

      if (arr.length) {
        return arr[index];
      }

      return null;
    }

    function scrollTo(key: string, time?: number, _easing?: any) {
      const easing = _easing || ease.current.circular;

      let isCan = true;

      if (onBeforeChange) {
        isCan = onBeforeChange(activeKey, key);
      }

      if (!isCan) return;

      scroll.current?.scrollToElement?.(findElByKey(key), time || 250, null, null, easing);

      setTimeout(() => {
        setActiveKey(key, () => onChange && onChange(key));
      }, time || 250);
    }

    function renderMenu() {
      return (menuData || []).map((data) => {
        if (renderMenuItem) {
          return (
            <li
              key={data.key}
              className={classNames(
                `${selectorPrefix}-menu-item`,
                {
                  [`active`]: activeKey === data.key,
                },
                menuItemClassName ?? '',
              )}
              style={menuItemStyle ?? {}}
            >
              <a onClick={() => scrollTo(data.key)}>{renderMenuItem(data)}</a>
            </li>
          );
        }

        return (
          <li
            key={data.key}
            className={classNames(
              `${selectorPrefix}-menu-item`,
              {
                [`active`]: activeKey === data.key,
              },
              menuItemClassName ?? '',
            )}
            style={menuItemStyle ?? {}}
          >
            <a onClick={() => scrollTo(data.key)}>{data.name}</a>
          </li>
        );
      });
    }

    function renderItem() {
      if (!children) return children;

      const childrenItems = Array.isArray(children) ? children : [children];

      return childrenItems?.map((t) => {
        let itemIns = t;

        if (t.key === activeKey) {
          itemIns = React.cloneElement(t, {
            ...(t.props ?? {}),
            className: classNames(t?.className, 'active'),
          });
        }

        return itemIns;
      });
    }

    useEffect(() => {
      setActiveKey(props.activeKey);
    }, [props.activeKey]);

    useEffect(() => {
      if (!scroll.current) {
        scroll.current = new IScroll(menuEl.current, { mouseWheel: true, click: true });
      }

      function onTouchmove(e) {
        e.preventDefault();
      }

      menuEl.current?.addEventListener?.('touchmove', onTouchmove);

      return () => menuEl.current?.removeEventListener?.('touchmove', onTouchmove);
    });

    useImperativeHandle(ref, () => ({
      scrollTo,
    }));

    return (
      <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}} ref={el}>
        <div
          ref={menuEl}
          className={classNames(`${selectorPrefix}-menu`, menuClassName ?? '')}
          style={{ ...menuStyle }}
        >
          <ul
            ref={menuInnerEl}
            className={classNames(`${selectorPrefix}-menu-inner`, menuInnerClassName ?? '')}
            style={menuInnerStyle ?? {}}
          >
            {renderMenu()}
          </ul>
        </div>

        <ul
          className={classNames(`${selectorPrefix}-tab`, tabClassName ?? '')}
          style={tabStyle ?? {}}
        >
          {renderItem()}
        </ul>
      </div>
    );
  }),
);

const JdCategoryTab = InternalJdCategoryTab as JdCategoryTabComponent;

JdCategoryTab.Item = JdCategoryTabItem;

export default JdCategoryTab;
