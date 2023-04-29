import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC, useMemo } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * CBLayout
 * @param wrapClassName
 * @param wrapStyle
 * @param autoWrapProps
 * @param autoInnerProps
 * @param bProps
 * @param cProps
 * @param props
 * @constructor
 */
const CBLayout: FC<TBLRCLayoutProps> = ({
  wrapClassName,
  wrapStyle,
  autoWrapProps,
  autoInnerProps,
  bProps,
  cProps,
  ...props
}) => {
  // @ts-ignore
  const BProps = omit<TBLRProps, string>(bProps, ['render']);
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
        wrapClassName,
      ),
    [cProps],
  );

  return (
    <div className={classList} style={wrapStyle || {}}>
      <FlexLayout
        {...(props || {})}
        className={classNames(`${selectorPrefix}-cb-layout`, props?.className)}
        direction="vertical"
      >
        <Auto {...(CProps || {})}>{cProps?.render?.()}</Auto>
        <Fixed {...(BProps || {})}>{bProps?.render?.()}</Fixed>
      </FlexLayout>
    </div>
  );
};

export default CBLayout;
