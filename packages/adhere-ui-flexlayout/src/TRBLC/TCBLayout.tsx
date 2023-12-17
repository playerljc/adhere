import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout from '../FlexLayout';
import { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TCBLayout
 * @constructor
 * @param _props
 * @param ref
 */
const TCBLayout = memo<PropsWithoutRef<TBLRCLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCLayoutProps>((_props, ref) => {
    const { wrapClassName, wrapStyle, tProps, tSplit, cProps, bProps, bSplit, ...props } = _props;

    // @ts-ignore
    const TProps = omit<TBLRProps, string>(tProps, ['children']);
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

    return (
      <div ref={ref} className={classList} style={wrapStyle ?? {}}>
        <FlexLayout
          {...(props ?? {})}
          className={classNames(`${selectorPrefix}-tc-layout`, props?.className ?? '')}
          direction="vertical"
        >
          <Fixed {...(TProps ?? {})}>{tProps?.children}</Fixed>

          {tSplit}

          <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>

          {bSplit}

          <Fixed {...(BProps ?? {})}>{bProps?.children}</Fixed>
        </FlexLayout>
      </div>
    );
  }),
);

TCBLayout.displayName = 'TCBLayout';

export default TCBLayout;
