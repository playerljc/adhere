import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC, useMemo } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout, { selectorPrefix } from '../flexlayout';
import { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * CRLayout
 * @param tProps
 * @param cProps
 * @param autoWrapProps
 * @param autoInnerProps
 * @param props
 * @constructor
 */
const CRLayout: FC<TBLRCLayoutProps> = ({
  wrapClassName,
  wrapStyle,
  rProps,
  cProps,
  autoWrapProps,
  autoInnerProps,
  ...props
}) => {
  // @ts-ignore
  const RProps = omit<TBLRProps, string>(rProps, ['render']);
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
        className={classNames(`${selectorPrefix}-cr-layout`, props?.className ?? '')}
        direction="horizontal"
      >
        <Auto {...(CProps ?? {})}>{cProps?.render?.()}</Auto>
        <Fixed {...(RProps ?? {})}>{rProps?.render?.()}</Fixed>
      </FlexLayout>
    </div>
  );
};

export default CRLayout;
