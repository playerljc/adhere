import classNames from 'classnames';
import React, { memo, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { InternalSpaceAroundProps, SpaceAroundComponent } from './types';

export const selectorPrefix = 'adhere-ui-flex-layout-space-around';

const { useTheme } = ConfigProvider;

const InternalSpaceAround = memo<InternalSpaceAroundProps>((props) => {
  const { className, style, direction, children, ...attrs } = props;

  const wrapperRef = useRef<HTMLElement | undefined>();

  useTheme<HTMLElement>({
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
      // @ts-ignore
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
