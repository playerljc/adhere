import classNames from 'classnames';
import React, { FC, memo, useContext, useMemo } from 'react';

import { FlexContext } from './context';
import { ContextType, FixedProps } from './types';

const selectorPrefix = 'adhere-ui-flexlayout-fixed';

/**
 * Fixed
 * @param props
 * @constructor
 */
const Fixed: FC<FixedProps> = (props) => {
  const { className, children, style, fit, span, ...attrs } = props;

  const { gutter = 0 } = useContext<ContextType>(FlexContext);

  const classList = useMemo(
    () =>
      classNames(selectorPrefix, className, {
        [`${selectorPrefix}-fit`]: fit,
        [`${selectorPrefix}-col-${props.span}`]:
          'span' in props && typeof props.span === 'number' && props.span >= 0 && props.span <= 24,
      }),
    [className, props.span, fit],
  );

  const styleList = useMemo(() => {
    const defaultStyle = style || {};

    let columnGapOrigin;

    if (Array.isArray(gutter)) {
      if (gutter.length === 1) {
        columnGapOrigin = gutter[0];
      } else if (gutter.length === 2) {
        columnGapOrigin = gutter[1];
      }
    } else {
      columnGapOrigin = gutter;
    }

    return {
      ...{
        paddingLeft: `${columnGapOrigin / 2}px`,
        paddingRight: `${columnGapOrigin / 2}px`,
      },
      ...defaultStyle,
    };
  }, [style, gutter]);

  return (
    <div className={classList} style={styleList} {...attrs}>
      {children}
    </div>
  );
};

export default memo(Fixed);
