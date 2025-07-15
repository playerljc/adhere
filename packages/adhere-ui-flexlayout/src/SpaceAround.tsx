import classNames from 'classnames';
import React, { memo, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { InternalSpaceAroundProps, SpaceAroundComponent } from './types';

export const selectorPrefix = 'adhere-ui-flex-layout-space-around';

const { useTheme } = ConfigProvider;

/**
 * 内部 SpaceAround 组件
 * 提供空间环绕布局的组件
 * 
 * @param {InternalSpaceAroundProps} props - 组件属性
 * @returns {JSX.Element} SpaceAround 组件
 */
const InternalSpaceAround = memo<InternalSpaceAroundProps>((props) => {
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

const SpaceAround = InternalSpaceAround as SpaceAroundComponent;

SpaceAround.displayName = 'SpaceAround';

export default SpaceAround;
