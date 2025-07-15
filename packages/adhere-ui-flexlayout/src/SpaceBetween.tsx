import classNames from 'classnames';
import React, { memo, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { InternalSpaceBetweenProps, SpaceBetweenComponent } from './types';

export const selectorPrefix = 'adhere-ui-flex-layout-space-between';

const { useTheme } = ConfigProvider;

/**
 * 内部 SpaceBetween 组件
 * 提供空间分布布局的组件
 * 
 * @param {InternalSpaceBetweenProps} props - 组件属性
 * @returns {JSX.Element} SpaceBetween 组件
 */
const InternalSpaceBetween = memo<InternalSpaceBetweenProps>((props) => {
  const { className, style, direction, children, ...attrs } = props;

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useTheme<HTMLDivElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'FlexLayout',
  });

  const targetDirection = useMemo(() => direction ?? 'horizontal', [direction]);

  const classList = useMemo(
    () => classNames(selectorPrefix, className, `${selectorPrefix}-${targetDirection}`),
    [className, targetDirection],
  );

  return (
    <div
      ref={wrapperRef}
      className={classList}
      style={style ?? {}}
      {...attrs}
    >
      {children}
    </div>
  );
});

const SpaceBetween = InternalSpaceBetween as SpaceBetweenComponent;

SpaceBetween.displayName = 'SpaceBetween';

export default SpaceBetween;
