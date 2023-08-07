import classNames from 'classnames';
import omit from 'omit.js';
import React, { ForwardRefRenderFunction, forwardRef, memo, useMemo } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * CRBLayout
 * @param tProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @param ref
 * @constructor
 */
const CRBLayout: ForwardRefRenderFunction<any, TBLRCLayoutProps> = (
  {
    wrapClassName,
    wrapStyle,
    autoWrapProps,
    autoInnerProps,
    rProps,
    rSplit,
    cProps,
    bProps,
    bSplit,
    ...props
  },
  ref,
) => {
  // @ts-ignore
  const RProps = omit<TBLRProps, string>(rProps, ['children']);
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
        className={classNames(`${selectorPrefix}-crb-layout`, props?.className ?? '')}
        direction="vertical"
      >
        <Auto {...(autoWrapProps ?? {})} fit={false} className={autoWrapClassList}>
          <FlexLayout
            {...(autoInnerProps ?? {})}
            className={autoInnerClassList}
            direction="horizontal"
          >
            <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>

            {rSplit}

            <Fixed {...(RProps ?? {})}>{rProps?.children}</Fixed>
          </FlexLayout>
        </Auto>

        {bSplit}

        <Fixed {...(BProps ?? {})}>{bProps?.children}</Fixed>
      </FlexLayout>
    </div>
  );
};

export default memo(forwardRef<any, TBLRCLayoutProps>(CRBLayout));
