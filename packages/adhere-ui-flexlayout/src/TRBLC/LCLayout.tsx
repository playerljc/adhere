import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC, useMemo } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * LCLayout
 * @param tProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const LCLayout: FC<TBLRCLayoutProps> = ({
  wrapClassName,
  wrapStyle,
  autoWrapProps,
  autoInnerProps,
  lProps,
  cProps,
  ...props
}) => {
  // @ts-ignore
  const LProps = omit<TBLRProps, string>(lProps, ['render']);
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

  return (
    <div className={classList} style={wrapStyle ?? {}}>
      <FlexLayout
        {...(props ?? {})}
        className={classNames(`${selectorPrefix}-lc-layout`, props?.className ?? '')}
        direction="horizontal"
      >
        <Fixed {...(LProps ?? {})}>{lProps?.render?.()}</Fixed>
        <Auto {...(CProps ?? {})}>{cProps?.render?.()}</Auto>
      </FlexLayout>
    </div>
  );
};

export default LCLayout;
