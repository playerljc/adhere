import classNames from 'classnames';
import React, { forwardRef, memo, useContext, useImperativeHandle, useMemo, useRef } from 'react';

import { FlexContext } from './Context';
import { useGap, useGrid, useTrigger } from './Hooks';
import { getGridStyle } from './Util';
import { ContextType, FixedProps } from './types';

const selectorPrefix = 'adhere-ui-flex-layout-fixed';

export const gridCount = 24;

/**
 * Fixed
 * @param {FixedProps} props
 * @param ref
 * @constructor
 */
const Fixed = memo<FixedProps>(
  forwardRef<any, FixedProps>((props, ref) => {
    const {
      className,
      children,
      style,
      fit,
      span,
      trigger,
      collapseDirection = 'L',
      collapsedSize = 80,
      defaultCollapsible = false,
      onCollapse,
      ...attrs
    } = props;

    const {
      gutter = 0,
      direction,
      children: contextChildren,
    } = useContext<ContextType>(FlexContext);

    const elRef = useRef<HTMLDivElement | null>(null);

    const isUseGrid = useGrid(props);

    const isUseGap = useGap(gutter);

    const renderTrigger = useTrigger({
      trigger,
      collapseDirection,
      collapsedSize,
      defaultCollapsible,
      onCollapse,
      selectorPrefix,
      elRef,
    });

    const classList = useMemo(
      () =>
        classNames(selectorPrefix, className ?? '', {
          [`${selectorPrefix}-fit`]: fit,
          [`${selectorPrefix}-col-${props.span}`]: isUseGrid,
          [`${selectorPrefix}-gap`]: isUseGap,
        }),
      [className, props.span, fit],
    );

    const styleList = useMemo(() => {
      const defaultStyle = style ?? {};

      const gridStyle = isUseGap
        ? getGridStyle({ gutter, span, children: contextChildren, direction })
        : {};

      return {
        ...defaultStyle,
        ...gridStyle,
      };
    }, [style, gutter]);

    useImperativeHandle(ref, () => ({
      getEl: () => elRef.current,
    }));

    return (
      <div ref={elRef} {...attrs} className={classNames(classList)} style={styleList}>
        {children}
        {renderTrigger()}
      </div>
    );
  }),
);

Fixed.displayName = 'Fixed';

export default Fixed;
