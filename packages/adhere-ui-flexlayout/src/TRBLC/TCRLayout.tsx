import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC, useMemo } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TCRLayout
 * @param lProps
 * @param tProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const TCRLayout: FC<TBLRCLayoutProps> = ({
  wrapClassName,
  wrapStyle,
  autoWrapProps,
  autoInnerProps,
  rProps,
  tProps,
  cProps,
  ...props
}) => {
  // @ts-ignore
  const RProps = omit<TBLRProps, string>(rProps, ['render']);
  // @ts-ignore
  const TProps = omit<TBLRProps, string>(tProps, ['render']);
  // @ts-ignore
  const CProps = omit<CenterProps, string>(cProps, ['render']);

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
        className={classNames(`${selectorPrefix}-tcr-layout`, props?.className ?? '')}
        direction="horizontal"
      >
        <Auto {...(autoWrapProps ?? {})} fit={false} className={autoWrapClassList}>
          <FlexLayout
            {...(autoInnerProps ?? {})}
            className={autoInnerClassList}
            direction="vertical"
          >
            <Fixed {...(TProps ?? {})}>{tProps?.render?.()}</Fixed>
            <Auto {...(CProps ?? {})}>{cProps?.render?.()}</Auto>
          </FlexLayout>
        </Auto>

        <Fixed {...(RProps ?? {})}>{rProps?.render?.()}</Fixed>
      </FlexLayout>
    </div>
  );
};

export default TCRLayout;
