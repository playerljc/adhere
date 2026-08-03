import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, HTMLProps, KeyboardEvent, MouseEvent } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';
import { createPopper } from '@popperjs/core';
import type { Instance, Options } from '@popperjs/core/lib/types';

import type { ComputedStyle, EllipsisProps, MoreProps } from './types';
import {
  DEFAULT_OFFSET_MODIFIER,
  DEFAULT_TRIGGER,
  getOptionsFunctionKey,
  getOptionsSignature,
  getTriggerDepKey,
  htmlToPlainText,
  mergeModifiersByName,
  shouldEnableFocusTabIndex,
  upsertModifier,
  type TriggerType,
} from './utils';

const selectorPrefix = 'adhere-ui-ellipsis';

const { useTheme } = ConfigProvider;

const DEFAULT_CUSTOM_TOOLTIP_OPTIONS: Partial<Options> = {};
const EMPTY_STYLE: CSSProperties = {};

/**
 * More 按钮组件
 */
const More: React.FC<MoreProps> = ({ children, onClick }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <div onClick={onClick} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
      {children}
    </div>
  );
};

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
    trigger = DEFAULT_TRIGGER,
    tooltipClassName = '',
    tooltipStyle = EMPTY_STYLE,
    tooltipArrowClassName = '',
    tooltipArrowStyle = EMPTY_STYLE,
    tooltipClose,
    tooltipMore,
    customTooltipOptions = DEFAULT_CUSTOM_TOOLTIP_OPTIONS,
    dangerouslySetInnerHTML,
    children,
  } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<Instance | null>(null);
  const customToolTipRef = useRef<HTMLDivElement | null>(null);
  const customTooltipOptionsRef = useRef(customTooltipOptions);
  const appliedOptionsSignatureRef = useRef<string | null>(null);
  const appliedOptionsFunctionKeyRef = useRef<string | null>(null);
  customTooltipOptionsRef.current = customTooltipOptions;

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
      return htmlToPlainText(dangerouslySetInnerHTML.__html);
    }

    return '';
  }, [tooltip, children, dangerouslySetInnerHTML]);

  const triggerDepKey = getTriggerDepKey(trigger);
  const customTooltipOptionsSignature = getOptionsSignature(customTooltipOptions);
  const customTooltipOptionsFunctionKey = getOptionsFunctionKey(customTooltipOptions);
  const hasIsUseNativeTooltipProp = 'isUseNativeTooltip' in props;
  const hasExplicitTriggerProp = 'trigger' in props;
  const hasWrapProp = 'wrap' in props;
  const hasWrapLinesProp = 'wrapLines' in props;
  const isOverMaxLength = computedTooltip.length > tooltipMaxLength;

  /**
   * 判断是否超过 tooltip 最大字符数
   */
  const isMaxValueToTooltip = isOverMaxLength;

  /**
   * 计算样式值
   */
  const styleComputed = useMemo((): ComputedStyle => {
    const computedStyle: ComputedStyle = {};

    if (isOverMaxLength) {
      if (!collapse && hasWrapLinesProp && wrapLines >= 2) {
        computedStyle.WebkitLineClamp = wrapLines;
      } else {
        computedStyle.WebkitLineClamp = 'unset';
      }
    } else if (hasWrapLinesProp && wrapLines >= 2) {
      computedStyle.WebkitLineClamp = wrapLines;
    } else {
      computedStyle.WebkitLineClamp = 'unset';
    }

    return computedStyle;
  }, [collapse, wrapLines, isOverMaxLength, hasWrapLinesProp]);

  /**
   * 是否使用自定义 tooltip
   */
  const isUseCustomToolTip = !isOverMaxLength && hasIsUseNativeTooltipProp && !isUseNativeTooltip;

  /**
   * 是否使用原生 title 属性显示 tooltip
   */
  const isUseTitleToTooltip = !isOverMaxLength && (!hasIsUseNativeTooltipProp || isUseNativeTooltip);

  /**
   * 是否使用单行省略样式
   */
  const isUseLineEllipsisClassName = isOverMaxLength
    ? !collapse && (!hasWrapProp || !wrap)
    : !hasWrapProp || !wrap;

  /**
   * 是否使用多行省略样式
   */
  const isUseMultiLineEllipsisClassName = isOverMaxLength
    ? !collapse && hasWrapProp && wrap
    : hasWrapProp && wrap;

  /**
   * 是否使用换行样式
   */
  const isUseWrapClassName = isOverMaxLength ? collapse : false;

  /**
   * 处理展开/收起状态切换
   */
  const handleToggleCollapse = useCallback(
    (_event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
      setCollapse((prev) => !prev);
    },
    [],
  );

  /**
   * 将最新 customTooltipOptions（含最新 modifier fn）应用到 Popper
   */
  const applyLatestCustomTooltipOptions = useCallback(() => {
    if (!tooltipRef.current) {
      return;
    }

    const userOptions = customTooltipOptionsRef.current;
    tooltipRef.current.setOptions((options) => ({
      ...options,
      ...userOptions,
      modifiers: mergeModifiersByName(options.modifiers, userOptions.modifiers),
    }));
    appliedOptionsSignatureRef.current = getOptionsSignature(userOptions);
    appliedOptionsFunctionKeyRef.current = getOptionsFunctionKey(userOptions);
  }, []);

  /**
   * 设置 popper eventListeners 启用状态
   */
  const setEventListenersEnabled = useCallback((enabled: boolean) => {
    if (!tooltipRef.current) {
      return;
    }

    tooltipRef.current.setOptions((options) => ({
      ...options,
      modifiers: upsertModifier(options.modifiers, {
        name: 'eventListeners',
        enabled,
      }),
    }));
  }, []);

  /**
   * 显示自定义 tooltip
   */
  const showCustomTooltip = useCallback(() => {
    applyLatestCustomTooltipOptions();

    if (customToolTipRef.current) {
      customToolTipRef.current.setAttribute('data-show', '');
    }

    if (tooltipRef.current) {
      setEventListenersEnabled(true);
      tooltipRef.current.update();
    }
  }, [applyLatestCustomTooltipOptions, setEventListenersEnabled]);

  /**
   * 隐藏自定义 tooltip
   */
  const hideCustomTooltip = useCallback(() => {
    if (customToolTipRef.current) {
      customToolTipRef.current.removeAttribute('data-show');
    }

    setEventListenersEnabled(false);
  }, [setEventListenersEnabled]);

  /**
   * 点击触发时切换自定义 tooltip
   */
  const toggleCustomTooltip = useCallback(() => {
    if (customToolTipRef.current?.hasAttribute('data-show')) {
      hideCustomTooltip();
    } else {
      showCustomTooltip();
    }
  }, [hideCustomTooltip, showCustomTooltip]);

  // 自定义 tooltip：创建 / 销毁 Popper，并绑定 trigger 事件
  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const tooltipEl = customToolTipRef.current;

    if (!isUseCustomToolTip || !wrapperEl || !tooltipEl) {
      return;
    }

    if (tooltipRef.current) {
      tooltipRef.current.destroy();
    }

    const userOptions = customTooltipOptionsRef.current;

    tooltipRef.current = createPopper(wrapperEl, tooltipEl, {
      placement: 'auto',
      ...userOptions,
      modifiers: mergeModifiersByName([DEFAULT_OFFSET_MODIFIER], userOptions.modifiers),
    });
    appliedOptionsSignatureRef.current = getOptionsSignature(userOptions);
    appliedOptionsFunctionKeyRef.current = getOptionsFunctionKey(userOptions);

    const triggers = triggerDepKey.split('|') as TriggerType[];
    const showEvents: string[] = [];
    const hideEvents: string[] = [];

    if (triggers.includes('hover')) {
      showEvents.push('mouseenter');
      hideEvents.push('mouseleave');
    }

    if (triggers.includes('focus')) {
      showEvents.push('focus');
      hideEvents.push('blur');
    }

    showEvents.forEach((event) => {
      wrapperEl.addEventListener(event, showCustomTooltip);
    });

    hideEvents.forEach((event) => {
      wrapperEl.addEventListener(event, hideCustomTooltip);
    });

    if (triggers.includes('click')) {
      wrapperEl.addEventListener('click', toggleCustomTooltip);
    }

    return () => {
      showEvents.forEach((event) => {
        wrapperEl.removeEventListener(event, showCustomTooltip);
      });

      hideEvents.forEach((event) => {
        wrapperEl.removeEventListener(event, hideCustomTooltip);
      });

      if (triggers.includes('click')) {
        wrapperEl.removeEventListener('click', toggleCustomTooltip);
      }

      if (tooltipRef.current) {
        tooltipRef.current.destroy();
        tooltipRef.current = null;
      }

      appliedOptionsSignatureRef.current = null;
      appliedOptionsFunctionKeyRef.current = null;
    };
  }, [isUseCustomToolTip, triggerDepKey, showCustomTooltip, hideCustomTooltip, toggleCustomTooltip]);

  // 同步 customTooltipOptions：
  // - 可序列化内容变化：始终同步
  // - 仅 fn 变更：仅在 tooltip 可见时同步（隐藏时忽略 inline fn 抖动）
  useEffect(() => {
    if (!isUseCustomToolTip || !tooltipRef.current) {
      return;
    }

    const signatureChanged =
      appliedOptionsSignatureRef.current !== customTooltipOptionsSignature;
    const functionKeyChanged =
      appliedOptionsFunctionKeyRef.current !== customTooltipOptionsFunctionKey;
    const isTooltipVisible = customToolTipRef.current?.hasAttribute('data-show');

    if (signatureChanged || (isTooltipVisible && functionKeyChanged)) {
      applyLatestCustomTooltipOptions();
    }
  }, [
    customTooltipOptionsSignature,
    customTooltipOptionsFunctionKey,
    isUseCustomToolTip,
    applyLatestCustomTooltipOptions,
  ]);

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

  const hasInnerHTML = Boolean(dangerouslySetInnerHTML?.__html);

  // 构建内部元素的属性
  const innerProps: HTMLProps<HTMLDivElement> = {
    className: classNames(`${selectorPrefix}-inner`, className, {
      [`${selectorPrefix}-line-ellipsis`]: isUseLineEllipsisClassName,
      [`${selectorPrefix}-multi-line-ellipsis`]: isUseMultiLineEllipsisClassName,
      [`${selectorPrefix}-wrap`]: isUseWrapClassName,
    }),
    style: { ...styleComputed, ...style },
  };

  // 显式传入含 focus 的 trigger 时，让内容容器可聚焦（避免默认配置污染 Tab 序）
  if (shouldEnableFocusTabIndex(isUseCustomToolTip, hasExplicitTriggerProp, trigger)) {
    innerProps.tabIndex = 0;
  }

  // 处理 innerHTML（与 children 互斥，避免 React 告警）
  if (hasInnerHTML) {
    innerProps.dangerouslySetInnerHTML = dangerouslySetInnerHTML;
  }

  // 使用原生 title 属性
  if (isUseTitleToTooltip) {
    innerProps.title = computedTooltip;
  }

  return (
    <>
      <div className={selectorPrefix}>
        <div ref={wrapperRef} {...innerProps}>
          {!hasInnerHTML ? children : null}
        </div>
        {isMaxValueToTooltip && renderMore()}
      </div>

      {/* 自定义 tooltip */}
      {isUseCustomToolTip && (
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
