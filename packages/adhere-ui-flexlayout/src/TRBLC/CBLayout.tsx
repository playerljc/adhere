import classNames from 'classnames';
import omit from 'omit.js';
import React, { forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * CBLayout
 * @param wrapClassName
 * @param wrapStyle
 * @param autoWrapProps
 * @param autoInnerProps
 * @param bProps
 * @param bSplit
 * @param cProps
 * @param props
 * @param ref
 * @constructor
 */
const CBLayout = memo<TBLRCLayoutProps>(
  forwardRef<any, TBLRCLayoutProps>(
    (
      { wrapClassName, wrapStyle, autoWrapProps, autoInnerProps, bProps, bSplit, cProps, ...props },
      ref,
    ) => {
      // @ts-ignore
      const BProps = omit<TBLRProps, string>(bProps, ['children']);
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
            className={classNames(`${selectorPrefix}-cb-layout`, props?.className ?? '')}
            direction="vertical"
          >
            <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>

            {bSplit}

            <Fixed {...(BProps ?? {})}>{bProps?.children}</Fixed>
          </FlexLayout>
        </div>
      );
    },
  ),
);

export default CBLayout;
