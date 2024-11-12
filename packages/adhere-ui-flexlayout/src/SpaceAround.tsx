import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import type { InternalSpaceAroundProps, SpaceAroundComponent } from './types';

export const selectorPrefix = 'adhere-ui-flex-layout-space-around';

const InternalSpaceAround = memo<InternalSpaceAroundProps>((props) => {
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

const SpaceAround = InternalSpaceAround as SpaceAroundComponent;

SpaceAround.displayName = 'SpaceAround';

export default SpaceAround;
