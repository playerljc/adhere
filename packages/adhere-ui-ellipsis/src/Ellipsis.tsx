import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, HTMLProps } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';
import { createPopper } from '@popperjs/core';
import type { Instance } from '@popperjs/core/lib/types';

import type { EllipsisProps } from './types';

const selectorPrefix = 'adhere-ui-ellipsis';

/**
 * Ellipsis
 * @param props
 * @constructor
 */
const Ellipsis = memo<EllipsisProps>((props) => {
  const {
    className,
    style,
    wrap = false,
    wrapLines = 2,
    tooltip,
    // tooltip最大显示的字符数
    tooltipMaxLength = 1024,
    // 是否使用title作为tooltip
    isUseNativeTooltip = true,
    // 自定义tooltip触发的条件
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

  const ref = useRef<HTMLDivElement>();
  const tooltipRef = useRef<Instance>();
  const customToolTipRef = useRef<HTMLDivElement | null>(null);

  const [collapse, setCollapse] = useState(false);

  // tooltip的计算内容
  const computedTooltip = useMemo<string>(() => {
    if (!!tooltip) return tooltip;

    if (!!children) return children;

    if (!!dangerouslySetInnerHTML?.__html) {
      const el = document.createElement('div');
      el.innerHTML = dangerouslySetInnerHTML.__html;
      return el.innerText;
    }

    return '';
  }, [tooltip, children, dangerouslySetInnerHTML]);

  // 是否到达tooltip最大字符显示数
  const isMaxValueToTooltip = useCallback(
    () => computedTooltip.length > tooltipMaxLength,
    [tooltip, children, dangerouslySetInnerHTML, tooltipMaxLength],
  );

  // style计算值
  const styleComputed = useMemo(() => {
    const computedStyle: CSSProperties = {};

    if (isMaxValueToTooltip()) {
      if (!collapse && 'wrapLines' in props && wrapLines >= 2) {
        computedStyle.WebkitLineClamp = wrapLines;
      } else {
        computedStyle.WebkitLineClamp = 'unset';
      }

      return computedStyle;
    }

    if ('wrapLines' in props && wrapLines >= 2) {
      computedStyle.WebkitLineClamp = wrapLines;
    } else {
      computedStyle.WebkitLineClamp = 'unset';
    }

    return computedStyle;
  }, [collapse, wrapLines, tooltip, children, dangerouslySetInnerHTML, tooltipMaxLength]);

  // 是否使用自定义toolTip
  const isUseCustomToolTip = useCallback(
    () => !isMaxValueToTooltip() && 'isUseNativeTooltip' in props && !isUseNativeTooltip,
    [tooltip, children, dangerouslySetInnerHTML, tooltipMaxLength, isUseNativeTooltip],
  );

  // 是否使用原生的title属性显示toolTip
  const isUseTitleToTooltip = useCallback(
    () => !isMaxValueToTooltip() && (!('isUseNativeTooltip' in props) || isUseNativeTooltip),
    [tooltip, children, dangerouslySetInnerHTML, tooltipMaxLength, isUseNativeTooltip],
  );

  // 是否使用单行...样式
  const isUseLineEllipsisClassName = useCallback(() => {
    // 超过了tooltip最大字符数
    if (isMaxValueToTooltip()) {
      return !collapse && (!('warp' in props) || !wrap);
    }

    return !('warp' in props) || !wrap;
  }, [collapse, wrap, tooltip, children, dangerouslySetInnerHTML, tooltipMaxLength]);

  // 是否使多行...样式
  const isUseMultiLineEllipsisClassName = useCallback(() => {
    // 超过了tooltip最大字符数
    if (isMaxValueToTooltip()) {
      return !collapse && 'wrap' in props && wrap;
    }

    return 'wrap' in props && wrap;
  }, [collapse, wrap, tooltip, children, dangerouslySetInnerHTML, tooltipMaxLength]);

  // 是否使用换行样式
  const isUseWrapClassName = useCallback(() => {
    // 超过了tooltip最大字符数
    if (isMaxValueToTooltip()) {
      return collapse;
    }

    return false;
  }, [wrapLines, collapse, tooltip, children, dangerouslySetInnerHTML, tooltipMaxLength]);

  useEffect(() => {
    // const showEvents = ['click'];
    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    function show() {
      // Make the tooltip visible
      customToolTipRef.current?.setAttribute?.('data-show', '');

      // Enable the event listeners
      tooltipRef.current?.setOptions?.((options) => ({
        ...options,
        modifiers: [...(options.modifiers ?? []), { name: 'eventListeners', enabled: true }],
      }));

      // Update its position
      tooltipRef.current?.update?.();
    }

    function hide() {
      // Hide the tooltip
      customToolTipRef.current?.removeAttribute?.('data-show');

      // Disable the event listeners
      tooltipRef.current?.setOptions?.((options) => ({
        ...options,
        modifiers: [...(options.modifiers ?? []), { name: 'eventListeners', enabled: false }],
      }));
    }

    // 使用自定义toolTip
    if (isUseCustomToolTip()) {
      if (tooltipRef.current) {
        tooltipRef.current?.destroy?.();
      }

      tooltipRef.current = createPopper(
        ref.current as HTMLDivElement,
        customToolTipRef.current as HTMLDivElement,
        customTooltipOptions ?? {
          placement: 'auto',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ],
        },
      );

      showEvents.forEach((event) => {
        ref.current?.addEventListener?.(event, show);
      });

      hideEvents.forEach((event) => {
        ref.current?.addEventListener?.(event, hide);
      });
    }

    return () => {
      showEvents.forEach((event) => {
        ref.current?.removeEventListener?.(event, show);
      });

      hideEvents.forEach((event) => {
        ref.current?.removeEventListener?.(event, hide);
      });
    };
  }, [
    tooltip,
    children,
    dangerouslySetInnerHTML,
    tooltipMaxLength,
    isUseNativeTooltip,
    customTooltipOptions,
  ]);

  /**
   * More
   * @param moreProps
   * @constructor
   */
  const More = (moreProps) => {
    return (
      <div
        onClick={() => {
          setCollapse(!collapse);
        }}
      >
        {moreProps.children}
      </div>
    );
  };

  /**
   * renderShow
   */
  const renderShow = () => <div className={`${selectorPrefix}-show-more`}>{Intl.v('展开')}</div>;

  /**
   * renderHide
   */
  const renderHide = () => <div className={`${selectorPrefix}-hide-more`}>{Intl.v('收起')}</div>;

  /**
   * renderMore
   */
  const renderMore = () => {
    return (
      <ConditionalRender
        conditional={collapse}
        noMatch={() => <More>{tooltipMore ?? renderShow()}</More>}
      >
        {() => <More>{tooltipClose ?? renderHide()}</More>}
      </ConditionalRender>
    );
  };

  // root的Wrap
  const innerProps: HTMLProps<any> = {
    className: classNames(`${selectorPrefix}-inner`, className ?? '', {
      // 单行...
      [`${selectorPrefix}-line-ellipsis`]: isUseLineEllipsisClassName(),
      // 多行...
      [`${selectorPrefix}-multi-line-ellipsis`]: isUseMultiLineEllipsisClassName(),
      // 换行
      [`${selectorPrefix}-wrap`]: isUseWrapClassName(),
    }),
    style: { ...styleComputed, ...(style ?? {}) },
  };

  if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
    innerProps.dangerouslySetInnerHTML = dangerouslySetInnerHTML;
  }

  // 使用原生title属性实现toolTip
  if (isUseTitleToTooltip()) {
    innerProps.title = computedTooltip;
  }

  return (
    <>
      <div className={`${selectorPrefix}`}>
        <div ref={ref} {...innerProps}>
          {children}
        </div>
        {isMaxValueToTooltip() && renderMore()}
      </div>

      {/*使用自定义的toolTip toolTip的内容*/}
      {isUseCustomToolTip() && (
        <div
          ref={customToolTipRef}
          className={classNames(`${selectorPrefix}-custom-tool-tip`, tooltipClassName ?? '')}
          style={tooltipStyle ?? {}}
        >
          {/*toolTip内容*/}
          <div className={classNames(`${selectorPrefix}-custom-tool-tip-inner`)}>
            {computedTooltip}
          </div>

          {/*tooltip的arrow*/}
          <div
            className={classNames(
              `${selectorPrefix}-custom-tool-tip-arrow`,
              tooltipArrowClassName ?? '',
            )}
            style={tooltipArrowStyle ?? {}}
            data-popper-arrow
          />
        </div>
      )}
    </>
  );
});

export default Ellipsis;
