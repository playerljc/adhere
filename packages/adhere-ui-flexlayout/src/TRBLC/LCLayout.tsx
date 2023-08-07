import classNames from 'classnames';
import omit from 'omit.js';
import React, { ForwardRefRenderFunction, forwardRef, memo, useMemo } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * LCLayout
 * @constructor
 * @param _props
 * @param ref
 */
const LCLayout: ForwardRefRenderFunction<any, TBLRCLayoutProps> = (_props, ref) => {
  const {
    wrapClassName,
    wrapStyle,
    autoWrapProps,
    autoInnerProps,
    lProps,
    lSplit,
    cProps,
    ...props
  } = _props;

  // @ts-ignore
  const LProps = omit<TBLRProps, string>(lProps, ['children']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['children']);

  const classList = useMemo(
    () =>
      classNames(
        `${selectorPrefix}-trblc`,
        {
          [`${selectorPrefix}-trblc-no-autofix`]:
            cProps && 'autoFixed' in cProps && !cProps.autoFixed,
        },
        wrapClassName ?? '',
      ),
    [cProps],
  );

  return (
    <div ref={ref} className={classList} style={wrapStyle ?? {}}>
      <FlexLayout
        {...(props ?? {})}
        className={classNames(`${selectorPrefix}-lc-layout`, props?.className ?? '')}
        direction="horizontal"
      >
        <Fixed {...(LProps ?? {})}>{lProps?.children}</Fixed>

        {lSplit}

        <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>
      </FlexLayout>
    </div>
  );
};

export default memo(forwardRef<any, TBLRCLayoutProps>(LCLayout));
