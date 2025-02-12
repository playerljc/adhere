import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * LCRLayout
 * @constructor
 * @param _props
 * @param ref
 */
const LCRLayout = memo<PropsWithoutRef<TBLRCLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCLayoutProps>((_props, ref) => {
    const { wrapClassName, wrapStyle, lProps, lSplit, cProps, rProps, rSplit, ...props } = _props;

    // @ts-ignore
    const LProps = omit<TBLRProps, string>(lProps, ['children']);
    // @ts-ignore
    const CProps = omit<CenterProps, string>(cProps, ['children']);
    // @ts-ignore
    const RProps = omit<TBLRProps, string>(rProps, ['children']);

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
          <Fixed collapseDirection="L" {...(LProps ?? {})}>
            {lProps?.children}
          </Fixed>

          {lSplit}

          <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>

          {rSplit}

          <Fixed collapseDirection="R" {...(RProps ?? {})}>
            {rProps?.children}
          </Fixed>
        </FlexLayout>
      </div>
    );
  }),
);

LCRLayout.displayName = 'LCRLayout';

export default LCRLayout;
