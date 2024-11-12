import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import type { InternalSpaceBetweenProps, SpaceBetweenComponent } from './types';

export const selectorPrefix = 'adhere-ui-flex-layout-space-between';

const InternalSpaceBetween = memo<InternalSpaceBetweenProps>((props) => {
  const { className, style, direction, children, ...attrs } = props;

  const targetDirection = useMemo(() => direction ?? 'horizontal', [direction]);

  const classList = useMemo(
    () => classNames(selectorPrefix, className, `${selectorPrefix}-${targetDirection}`),
    [className, targetDirection],
  );

  return (
    <div className={classList} style={style ?? {}} {...attrs}>
      {children}
    </div>
  );
});

const SpaceBetween = InternalSpaceBetween as SpaceBetweenComponent;

SpaceBetween.displayName = 'SpaceBetween';

export default SpaceBetween;
