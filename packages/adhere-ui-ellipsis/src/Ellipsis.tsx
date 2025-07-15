import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, HTMLProps } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';
import { createPopper } from '@popperjs/core';
import type { Instance } from '@popperjs/core/lib/types';

import type { ComputedStyle, EllipsisProps, MoreProps } from './types';

const selectorPrefix = 'adhere-ui-ellipsis';

const { useTheme } = ConfigProvider;

/**
 * 文本省略号组件
 *
 * 支持单行和多行文本省略，可配置 tooltip 提示，支持展开/收起功能
 *
 * @example
 * ```tsx
 * // 单行省略
 * <Ellipsis>这是一段很长的文本内容，超出部分会显示省略号</Ellipsis>
 *
 * // 多行省略
 * <Ellipsis wrap wrapLines={3}>这是一段很长的文本内容，超出三行部分会显示省略号</Ellipsis>
 *
 * // 自定义 tooltip
 * <Ellipsis isUseNativeTooltip={false} tooltip="完整内容">省略的文本</Ellipsis>
 * ```
 *
 * @param props - 组件属性
 * @returns Ellipsis 组件实例
 */
const Ellipsis = memo<EllipsisProps>((props) => {
  const {
    className,
    style,
    wrap = false,
    wrapLines = 2,
    tooltip,
    tooltipMaxLength = 1024,
    isUseNativeTooltip = true,
    trigger = 'hover',
    tooltipClassName = '',
    tooltipStyle = {},
    tooltipArrowClassName = '',
    tooltipArrowStyle = {},
    tooltipClose,
    tooltipMore,
    customTooltipOptions = {},
    dangerouslySetInnerHTML,
    children,
  } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<Instance | null>(null);
  const customToolTipRef = useRef<HTMLDivElement | null>(null);

  useTheme<HTMLElement>({
    elRef: [wrapperRef, customToolTipRef],
    group: 'normal',
    displayName: 'Ellipsis',
  });

  const [collapse, setCollapse] = useState<boolean>(false);

  /**
   * 计算 tooltip 显示内容
   * 优先级：tooltip > children > dangerouslySetInnerHTML
   */
  const computedTooltip = useMemo<string>(() => {
    if (tooltip) return tooltip;

    if (children) return children;

    if (dangerouslySetInnerHTML?.__html) {
      const el = document.createElement('div');
      el.innerHTML = dangerouslySetInnerHTML.__html;
      return el.innerText;
    }

    return '';
  }, [tooltip, children, dangerouslySetInnerHTML]);

  /**
   * 判断是否超过 tooltip 最大字符数
   */
  const isMaxValueToTooltip = useCallback(
    (): boolean => computedTooltip.length > tooltipMaxLength,
    [computedTooltip.length, tooltipMaxLength],
  );

  /**
   * 计算样式值
   */
  const styleComputed = useMemo((): ComputedStyle => {
    const computedStyle: ComputedStyle = {};

    if (isMaxValueToTooltip()) {
      if (!collapse && 'wrapLines' in props && wrapLines >= 2) {
        computedStyle.WebkitLineClamp = wrapLines;
      } else {
        computedStyle.WebkitLineClamp = 'unset';
      }
    } else if ('wrapLines' in props && wrapLines >= 2) {
      computedStyle.WebkitLineClamp = wrapLines;
    } else {
      computedStyle.WebkitLineClamp = 'unset';
    }

    return computedStyle;
  }, [collapse, wrapLines, isMaxValueToTooltip, props]);

  /**
   * 是否使用自定义 tooltip
   */
  const isUseCustomToolTip = useCallback(
    (): boolean => !isMaxValueToTooltip() && 'isUseNativeTooltip' in props && !isUseNativeTooltip,
    [isMaxValueToTooltip, isUseNativeTooltip, props],
  );

  /**
   * 是否使用原生 title 属性显示 tooltip
   */
  const isUseTitleToTooltip = useCallback(
    (): boolean =>
      !isMaxValueToTooltip() && (!('isUseNativeTooltip' in props) || isUseNativeTooltip),
    [isMaxValueToTooltip, isUseNativeTooltip, props],
  );

  /**
   * 是否使用单行省略样式
   */
  const isUseLineEllipsisClassName = useCallback((): boolean => {
    if (isMaxValueToTooltip()) {
      return !collapse && (!('wrap' in props) || !wrap);
    }
    return !('wrap' in props) || !wrap;
  }, [isMaxValueToTooltip, collapse, wrap, props]);

  /**
   * 是否使用多行省略样式
   */
  const isUseMultiLineEllipsisClassName = useCallback((): boolean => {
    if (isMaxValueToTooltip()) {
      return !collapse && 'wrap' in props && wrap;
    }
    return 'wrap' in props && wrap;
  }, [isMaxValueToTooltip, collapse, wrap, props]);

  /**
   * 是否使用换行样式
   */
  const isUseWrapClassName = useCallback((): boolean => {
    if (isMaxValueToTooltip()) {
      return collapse;
    }
    return false;
  }, [isMaxValueToTooltip, collapse]);

  /**
   * 处理展开/收起状态切换
   */
  const handleToggleCollapse = useCallback(() => {
    setCollapse((prev) => !prev);
  }, []);

  /**
   * 显示自定义 tooltip
   */
  const showCustomTooltip = useCallback(() => {
    if (customToolTipRef.current) {
      customToolTipRef.current.setAttribute('data-show', '');
    }

    if (tooltipRef.current) {
      tooltipRef.current.setOptions((options) => ({
        ...options,
        modifiers: [...(options.modifiers ?? []), { name: 'eventListeners', enabled: true }],
      }));
      tooltipRef.current.update();
    }
  }, []);

  /**
   * 隐藏自定义 tooltip
   */
  const hideCustomTooltip = useCallback(() => {
    if (customToolTipRef.current) {
      customToolTipRef.current.removeAttribute('data-show');
    }

    if (tooltipRef.current) {
      tooltipRef.current.setOptions((options) => ({
        ...options,
        modifiers: [...(options.modifiers ?? []), { name: 'eventListeners', enabled: false }],
      }));
    }
  }, []);

  // 自定义 tooltip 事件处理
  useEffect(() => {
    if (!isUseCustomToolTip() || !wrapperRef.current) {
      return;
    }

    // 清理之前的实例
    if (tooltipRef.current) {
      tooltipRef.current.destroy();
    }

    // 创建新的 popper 实例
    tooltipRef.current = createPopper(wrapperRef.current, customToolTipRef.current!, {
      placement: 'auto',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
      ...customTooltipOptions,
    });

    // 添加事件监听器
    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach((event) => {
      wrapperRef.current?.addEventListener(event, showCustomTooltip);
    });

    hideEvents.forEach((event) => {
      wrapperRef.current?.addEventListener(event, hideCustomTooltip);
    });

    // 清理函数
    return () => {
      showEvents.forEach((event) => {
        wrapperRef.current?.removeEventListener(event, showCustomTooltip);
      });

      hideEvents.forEach((event) => {
        wrapperRef.current?.removeEventListener(event, hideCustomTooltip);
      });

      if (tooltipRef.current) {
        tooltipRef.current.destroy();
        tooltipRef.current = null;
      }
    };
  }, [isUseCustomToolTip, customTooltipOptions, showCustomTooltip, hideCustomTooltip]);

  /**
   * More 按钮组件
   */
  const More: React.FC<MoreProps> = ({ children, onClick }) => (
    <div onClick={onClick} role="button" tabIndex={0}>
      {children}
    </div>
  );

  /**
   * 渲染展开按钮
   */
  const renderShow = (): React.ReactNode => (
    <div className={`${selectorPrefix}-show-more`}>{Intl.get('expand')}</div>
  );

  /**
   * 渲染收起按钮
   */
  const renderHide = (): React.ReactNode => (
    <div className={`${selectorPrefix}-hide-more`}>{Intl.get('collapse')}</div>
  );

  /**
   * 渲染展开/收起按钮
   */
  const renderMore = (): React.ReactNode => (
    <ConditionalRender
      conditional={collapse}
      noMatch={() => <More onClick={handleToggleCollapse}>{tooltipMore ?? renderShow()}</More>}
    >
      {() => <More onClick={handleToggleCollapse}>{tooltipClose ?? renderHide()}</More>}
    </ConditionalRender>
  );

  // 构建内部元素的属性
  const innerProps: HTMLProps<HTMLDivElement> = {
    className: classNames(`${selectorPrefix}-inner`, className, {
      [`${selectorPrefix}-line-ellipsis`]: isUseLineEllipsisClassName(),
      [`${selectorPrefix}-multi-line-ellipsis`]: isUseMultiLineEllipsisClassName(),
      [`${selectorPrefix}-wrap`]: isUseWrapClassName(),
    }),
    style: { ...styleComputed, ...style },
  };

  // 处理 innerHTML
  if (dangerouslySetInnerHTML?.__html) {
    innerProps.dangerouslySetInnerHTML = dangerouslySetInnerHTML;
  }

  // 使用原生 title 属性
  if (isUseTitleToTooltip()) {
    innerProps.title = computedTooltip;
  }

  return (
    <>
      <div className={selectorPrefix}>
        <div ref={wrapperRef} {...innerProps}>
          {children}
        </div>
        {isMaxValueToTooltip() && renderMore()}
      </div>

      {/* 自定义 tooltip */}
      {isUseCustomToolTip() && (
        <div
          ref={customToolTipRef}
          className={classNames(`${selectorPrefix}-custom-tool-tip`, tooltipClassName)}
          style={tooltipStyle}
          role="tooltip"
        >
          <div className={`${selectorPrefix}-custom-tool-tip-inner`}>{computedTooltip}</div>
          <div
            className={classNames(`${selectorPrefix}-custom-tool-tip-arrow`, tooltipArrowClassName)}
            style={tooltipArrowStyle}
            data-popper-arrow
          />
        </div>
      )}
    </>
  );
});

Ellipsis.displayName = 'Ellipsis';

export default Ellipsis;
