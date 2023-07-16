import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC, useMemo } from 'react';

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
 * @constructor
 */
const LCBLayout: FC<TBLRCLayoutProps> = ({
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
}) => {
  // @ts-ignore
  const LProps = omit<TBLRProps, string>(lProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);
  // @ts-ignore
  const BProps = omit<TBLRProps, string>(bProps, ['render']);

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
    <div className={classList} style={wrapStyle ?? {}}>
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
            <Fixed {...(LProps ?? {})}>{lProps?.render?.()}</Fixed>

            {lSplit}

            <Auto {...(CProps ?? {})}>{cProps?.render?.()}</Auto>
          </FlexLayout>
        </Auto>

        {bSplit}

        <Fixed {...(BProps ?? {})}>{bProps?.render?.()}</Fixed>
      </FlexLayout>
    </div>
  );
};

export default LCBLayout;
