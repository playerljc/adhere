import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll';
import React, {
  type PropsWithoutRef,
  type RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Hooks from '@baifendian/adhere-ui-hooks';

import JdCategoryTabItem from './Item';
import type { JdCategoryTabComponent, JdCategoryTabProps, JdCategoryTabRefHandle, MenuDataItem } from './types';

const selectorPrefix = 'adhere-ui-jd-category-tab';

const { useTheme } = ConfigProvider;

/**
 * JdCategoryTab组件
 * 一个支持横向滚动的分类标签组件，常用于电商类应用的分类导航
 * 
 * @example
 * ```tsx
 * <JdCategoryTab
 *   activeKey="category1"
 *   menuData={[
 *     { key: 'category1', name: '分类1' },
 *     { key: 'category2', name: '分类2' }
 *   ]}
 *   onChange={(key) => console.log('切换到:', key)}
 * >
 *   <JdCategoryTab.Item key="category1">分类1内容</JdCategoryTab.Item>
 *   <JdCategoryTab.Item key="category2">分类2内容</JdCategoryTab.Item>
 * </JdCategoryTab>
 * ```
 */
const InternalJdCategoryTab = memo<
  PropsWithoutRef<JdCategoryTabProps> & RefAttributes<JdCategoryTabRefHandle>
>(
  forwardRef<JdCategoryTabRefHandle, JdCategoryTabProps>((props, ref) => {
    const {
      className,
      style = {},
      menuClassName,
      menuStyle = {},
      menuInnerClassName,
      menuInnerStyle = {},
      tabClassName,
      tabStyle = {},
      menuData = [],
      menuItemClassName,
      menuItemStyle = {},
      renderMenuItem,
      onBeforeChange,
      onChange,
      children,
      activeKey,
    } = props;

    // 使用useState替代useSetState，提高性能
    const [currentActiveKey, setCurrentActiveKey] = useState(activeKey);

    const ease = useRef(IScroll.utils.ease);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const menuEl = useRef<HTMLDivElement | null>(null);
    const menuInnerEl = useRef<HTMLUListElement | null>(null);
    const scroll = useRef<IScroll | null>(null);

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'normal',
      displayName: 'JdCategoryTab',
    });

    /**
     * 根据key查找对应的DOM元素
     * @param key - 菜单项的key
     * @returns 对应的DOM元素或null
     */
    const findElByKey = useCallback((key: string): HTMLElement | null => {
      const index = menuData.findIndex((item: MenuDataItem) => item.key === key);
      
      if (index === -1 || !menuInnerEl.current) {
        return null;
      }

      const menuItems = menuInnerEl.current.querySelectorAll<HTMLElement>(`.${selectorPrefix}-menu-item`);
      
      return menuItems[index] || null;
    }, [menuData]);

    /**
     * 滚动到指定key对应的菜单项
     * @param key - 目标菜单项的key
     * @param time - 滚动动画时长（毫秒），默认250ms
     * @param easing - 缓动函数，默认使用circular缓动
     */
    const scrollTo = useCallback((key: string, time: number = 250, _easing?: any): void => {
      const easing = _easing || ease.current.circular;

      // 检查是否可以切换
      if (onBeforeChange && !onBeforeChange(currentActiveKey, key)) {
        return;
      }

      const targetEl = findElByKey(key);
      if (!targetEl || !scroll.current) {
        return;
      }

      // 执行滚动动画
      scroll.current.scrollToElement(targetEl, time, null, null, easing);

      // 延迟更新状态，等待动画完成
      setTimeout(() => {
        setCurrentActiveKey(key);
        onChange?.(key);
      }, time);
    }, [currentActiveKey, findElByKey, onBeforeChange, onChange]);

    /**
     * 渲染菜单项
     * @returns 菜单项JSX数组
     */
    const renderMenu = useCallback((): React.ReactElement[] => {
      return menuData.map((data: MenuDataItem) => {
        const isActive = currentActiveKey === data.key;
        const itemContent = renderMenuItem ? renderMenuItem(data) : data.name;

        return (
          <li
            key={data.key}
            className={classNames(
              `${selectorPrefix}-menu-item`,
              {
                active: isActive,
              },
              menuItemClassName,
            )}
            style={menuItemStyle}
          >
            <a onClick={() => scrollTo(data.key)}>{itemContent}</a>
          </li>
        );
      });
    }, [menuData, currentActiveKey, renderMenuItem, menuItemClassName, menuItemStyle, scrollTo]);

    /**
     * 渲染标签内容
     * @returns 标签内容JSX数组
     */
    const renderItem = useCallback((): React.ReactElement[] | null => {
      if (!children) {
        return null;
      }

      const childrenItems = Array.isArray(children) ? children : [children];

      return childrenItems.map((child: React.ReactElement) => {
        const isActive = child.key === currentActiveKey;
        
        if (isActive) {
          return React.cloneElement(child, {
            ...child.props,
            className: classNames(child.props?.className, 'active'),
          });
        }

        return child;
      });
    }, [children, currentActiveKey]);

    // 监听activeKey变化
    useEffect(() => {
      setCurrentActiveKey(activeKey);
    }, [activeKey]);

    // 初始化IScroll
    useEffect(() => {
      if (!scroll.current && menuEl.current) {
        scroll.current = new IScroll(menuEl.current, { 
          mouseWheel: true, 
          click: true,
          scrollX: true,
          scrollY: false,
        });
      }

      // 防止移动端滚动穿透
      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
      };

      menuEl.current?.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        menuEl.current?.removeEventListener('touchmove', handleTouchMove);
        scroll.current?.destroy?.();
        scroll.current = null;
      };
    }, []);

    // 暴露scrollTo方法给父组件
    useImperativeHandle(ref, () => ({
      scrollTo,
    }), [scrollTo]);

    return (
      <div
        ref={wrapperRef}
        className={classNames(selectorPrefix, className)}
        style={style}
      >
        <div
          ref={menuEl}
          className={classNames(`${selectorPrefix}-menu`, menuClassName)}
          style={menuStyle}
        >
          <ul
            ref={menuInnerEl}
            className={classNames(`${selectorPrefix}-menu-inner`, menuInnerClassName)}
            style={menuInnerStyle}
          >
            {renderMenu()}
          </ul>
        </div>

        <ul
          className={classNames(`${selectorPrefix}-tab`, tabClassName)}
          style={tabStyle}
        >
          {renderItem()}
        </ul>
      </div>
    );
  }),
);

const JdCategoryTab = InternalJdCategoryTab as JdCategoryTabComponent;

JdCategoryTab.displayName = 'JdCategoryTab';

JdCategoryTab.Item = JdCategoryTabItem;

export default JdCategoryTab;
