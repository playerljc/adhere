import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC, useMemo } from 'react';

import Auto from '../auto';
import Fixed from '../fixed';
import FlexLayout from '../flexlayout';
import { selectorPrefix } from '../flexlayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TCLayout
 * @constructor
 * @param _props
 */
const TCLayout: FC<TBLRCLayoutProps> = (_props) => {
  const {
    wrapClassName,
    wrapStyle,
    autoWrapProps,
    autoInnerProps,
    tProps,
    tSplit,
    cProps,
    ...props
  } = _props;

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

  return (
    <div className={classList} style={wrapStyle ?? {}}>
      <FlexLayout
        {...(props ?? {})}
        className={classNames(`${selectorPrefix}-tc-layout`, props?.className ?? '')}
        direction="vertical"
      >
        <Fixed {...(TProps ?? {})}>{tProps?.render?.()}</Fixed>

        {tSplit}

        <Auto {...(CProps ?? {})}>{cProps?.render?.()}</Auto>
      </FlexLayout>
    </div>
  );
};

export default TCLayout;
