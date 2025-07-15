import classNames from 'classnames';
import React, {
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import type { AnchorNavigationProps, AnchorConfig } from './types';

const selectPrefix = 'adhere-ui-playground-anchor-navigation';

/**
 * 锚点导航组件
 * @component AnchorNavigation
 * @description 带有锚点导航的面板，支持自动定位和滚动到指定锚点
 * @param props - 组件属性
 * @returns JSX.Element
 */
const AnchorNavigation = memo<AnchorNavigationProps>((props) => {
  const {
    className,
    style,
    autoClassName,
    autoStyle,
    fixedClassName,
    fixedStyle,
    anchors = [],
    anchorPosition = {
      top: 77,
      width: 120,
    },
    children,
    activeAnchor: propActiveAnchor,
  } = props;

  const [activeAnchor, setActiveAnchor] = useState<string>(propActiveAnchor ?? '');
  const anchorRef = useRef<HTMLUListElement | null>(null);

  /**
   * 监听activeAnchor属性变化
   */
  useEffect(() => {
    setActiveAnchor(propActiveAnchor ?? '');
  }, [propActiveAnchor]);

  /**
   * 处理锚点点击
   * @function handleAnchorClick
   * @param anchor - 锚点配置
   */
  const handleAnchorClick = (anchor: AnchorConfig): void => {
    setActiveAnchor(anchor.anchor);

    const anchorEl = document.getElementById(anchor.anchor);
    if (anchorEl) {
      anchorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classNames(selectPrefix, className)} style={style}>
      <div className={classNames(`${selectPrefix}-auto`, autoClassName)} style={autoStyle}>
        <div className={`${selectPrefix}-inner`}>{children}</div>
      </div>

      <ConditionalRender conditional={!!anchors.length}>
        {() => (
          <div
            className={classNames(`${selectPrefix}-fixed`, fixedClassName)}
            style={{ ...style, width: `${anchorPosition.width}px` }}
          >
            <ul className={`${selectPrefix}-anchor`} ref={anchorRef}>
              {anchors.map((anchor, index) => (
                <li
                  key={`${index}`}
                  className={anchor.anchor === activeAnchor ? `${selectPrefix}-active` : ''}
                  title={anchor.name}
                >
                  <a onClick={() => handleAnchorClick(anchor)}>
                    {anchor.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ConditionalRender>
    </div>
  );
});

AnchorNavigation.displayName = 'AnchorNavigation';

export default AnchorNavigation;
