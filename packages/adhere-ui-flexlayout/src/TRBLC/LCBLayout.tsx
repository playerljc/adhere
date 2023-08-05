import classNames from 'classnames';
import omit from 'omit.js';
import React, { ForwardRefRenderFunction, forwardRef, memo, useMemo } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * LCBLayout
 * @param tProps
 * @param lProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @param ref
 * @constructor
 */
const LCBLayout: ForwardRefRenderFunction<any, TBLRCLayoutProps> = (
  {
    wrapClassName,
    wrapStyle,
    autoWrapProps,
    autoInnerProps,
    lProps,
    lSplit,
    cProps,
    bProps,
    bSplit,
    ...props
  },
  ref,
) => {
  // @ts-ignore
  const LProps = omit<TBLRProps, string>(lProps, ['children']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['children']);
  // @ts-ignore
  const BProps = omit<TBLRProps, string>(bProps, ['children']);

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

  const autoWrapClassList = useMemo(
    () =>
      classNames(
        `${selectorPrefix}-trblc-auto`,
        {
          [`${selectorPrefix}-trblc-auto-no-autofix`]:
            autoWrapProps && 'autoFixed' in autoWrapProps && !autoWrapProps.autoFixed,
        },
        autoWrapProps?.className ?? '',
      ),
    [autoWrapProps],
  );

  const autoInnerClassList = useMemo(
    () =>
      classNames(
        `${selectorPrefix}-horizontal-flex-layout`,
        `${selectorPrefix}-trblc-auto-inner`,
        {
          [`${selectorPrefix}-trblc-auto-inner-no-autofix`]:
            autoInnerProps && 'autoFixed' in autoInnerProps && !autoInnerProps.autoFixed,
        },
        autoInnerProps?.className ?? '',
      ),
    [autoInnerProps],
  );

  return (
    <div ref={ref} className={classList} style={wrapStyle ?? {}}>
      <FlexLayout
        {...(props ?? {})}
        className={classNames(`${selectorPrefix}-lcb-layout`, props?.className ?? '')}
        direction="vertical"
      >
        <Auto {...(autoWrapProps ?? {})} fit={false} className={autoWrapClassList}>
          <FlexLayout
            {...(autoInnerProps ?? {})}
            className={autoInnerClassList}
            direction="horizontal"
          >
            <Fixed {...(LProps ?? {})}>{lProps?.children}</Fixed>

            {lSplit}

            <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>
          </FlexLayout>
        </Auto>

        {bSplit}

        <Fixed {...(BProps ?? {})}>{bProps?.children}</Fixed>
      </FlexLayout>
    </div>
  );
};

export default memo(forwardRef<any, TBLRCLayoutProps>(LCBLayout));
