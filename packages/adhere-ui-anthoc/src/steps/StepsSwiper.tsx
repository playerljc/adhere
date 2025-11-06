import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, { ReactElement, memo, useMemo, useRef, useState } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { DisplayNameInternal, StepsSwiperProps } from '../types';
import Steps from './index';

const selectorPrefix = 'adhere-ui-anthoc-steps-swiper';

const { useTheme } = ConfigProvider;

/**
 * StepsSwiper
 * @description
 */
const InternalStepsSwiper = memo<StepsSwiperProps>(
  ({
    className,
    style,
    indicatorClassName,
    indicatorStyle,
    indicatorWrapperClassName,
    indicatorWrapperStyle,
    contentClassName,
    contentStyle,
    direction,
    isFullWidth,
    isFullHeight,
    itemRenderMode,
    itemLayoutMode,
    items,
    ...stepsProps
  }) => {
    function fillItems(items, initial) {
      return items.map((_, _index) => ({
        ..._,
        _visited: _index === initial,
      }));
    }

    const wrapperRef = useRef<HTMLElement | undefined>(undefined);

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'normal-hoc',
    });

    const targetStepsProps = useMemo(() => {
      const _props = stepsProps ?? {};

      if (!('current' in _props)) {
        _props.current = 0;
      }

      if (!('initial' in _props)) {
        _props.initial = 0;
      }

      return _props;
    }, [stepsProps]);

    const targetCurrent = useMemo(
      () => targetStepsProps.current as number,
      [targetStepsProps.current],
    );

    const targetDirection = useMemo(() => direction ?? 'top', [direction]);

    const targetItemRenderMode = useMemo(() => itemRenderMode ?? 'lazy', [itemRenderMode]);

    const targetItemLayoutMode = useMemo(() => itemLayoutMode ?? 'auto', [itemLayoutMode]);

    const isTargetFillWidth = useMemo(
      () => (typeof isFullWidth === 'boolean' ? isFullWidth : false),
      [isFullWidth],
    );

    const isTargetFillHeight = useMemo(
      () => (typeof isFullHeight === 'boolean' ? isFullHeight : false),
      [isFullHeight],
    );

    const targetInitial = useMemo(() => targetStepsProps.initial, [targetStepsProps.initial]);

    const [targetItems, setTargetItems] = useState(fillItems(items, targetInitial));

    const indicator = useMemo(() => {
      let direction = 'horizontal';
      if (['top', 'bottom'].includes(targetDirection)) direction = 'horizontal';
      if (['left', 'right'].includes(targetDirection)) direction = 'vertical';
      const _items = targetItems.map(({ children, _visited, ...t }) => t);

      return (
        <Steps
          {...targetStepsProps}
          className={indicatorClassName}
          style={indicatorStyle ?? {}}
          direction={direction}
          items={_items}
        />
      );
    }, [targetStepsProps, targetDirection, targetItems, indicatorClassName, indicatorStyle]);

    const swiper = useMemo(() => {
      if (targetItemRenderMode === 'forceRecreate') {
        return targetItems.map((item, _index) => {
          if (_index === targetCurrent) {
            return (
              <div key={targetCurrent} className={`${selectorPrefix}-item`}>
                {targetItems[targetCurrent].children}
              </div>
            );
          }

          return null;
        });
      }

      if (targetItemRenderMode === 'lazy') {
        return targetItems.map((item, _index) => {
          if (targetCurrent !== _index) {
            return (
              <div
                key={_index}
                className={classNames(`${selectorPrefix}-item`, `${selectorPrefix}-item-hide`)}
              >
                {item._visited && targetItems[_index].children}
              </div>
            );
          }

          return (
            <div
              key={_index}
              className={classNames(`${selectorPrefix}-item`, `${selectorPrefix}-item-active`)}
            >
              {targetItems[_index].children}
            </div>
          );
        });
      }
    }, [targetItems, targetItemRenderMode, targetCurrent]);

    const layout = useMemo<ReactElement>(
      () => (
        <div
          // @ts-ignore
          rel={wrapperRef}
          className={classNames(
            selectorPrefix,
            [`${selectorPrefix}-layout-${targetItemLayoutMode}`],
            [`${selectorPrefix}-${targetDirection}`],
            {
              [`${selectorPrefix}-full-width`]: isTargetFillWidth,
              [`${selectorPrefix}-full-height`]: isTargetFillHeight,
            },
            className,
          )}
          style={style ?? {}}
        >
          <div
            className={classNames(`${selectorPrefix}-indicator`, indicatorWrapperClassName)}
            style={indicatorWrapperStyle ?? {}}
          >
            {indicator}
          </div>
          <div
            className={classNames(`${selectorPrefix}-content`, contentClassName)}
            style={contentStyle ?? {}}
          >
            {swiper}
          </div>
        </div>
      ),
      [
        className,
        style,
        indicatorWrapperClassName,
        indicatorWrapperStyle,
        contentClassName,
        contentStyle,
        indicator,
        swiper,
        targetItemLayoutMode,
        isTargetFillWidth,
        isTargetFillHeight,
        targetDirection,
      ],
    );

    useUpdateEffect(() => {
      setTargetItems(fillItems(items, targetInitial));
    }, [items, targetInitial]);

    useUpdateEffect(() => {
      setTargetItems((items) => {
        items[targetCurrent]._visited = true;
        return [...items];
      });
    }, [targetCurrent]);

    return layout;
  },
);

const StepsSwiper = InternalStepsSwiper as DisplayNameInternal<typeof InternalStepsSwiper>;
StepsSwiper.displayName = 'StepsSwiper';

export default StepsSwiper;
