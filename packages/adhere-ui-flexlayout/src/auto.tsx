import classNames from 'classnames';
import React, { FC, memo, useMemo } from 'react';

import { AutoProps } from './types';

const selectorPrefix = 'adhere-ui-flexlayout-auto';

const Auto: FC<AutoProps> = (props) => {
  const { children, className = '', style = {}, autoFixed = true, fit = true, ...attrs } = props;

  const classList = useMemo(
    () =>
      classNames(selectorPrefix, className, {
        [`${selectorPrefix}-autoFixed`]: autoFixed,
        [`${selectorPrefix}-fit`]: fit,
      }),
    [className, autoFixed, fit],
  );

  const styleList = useMemo(() => style || {}, [style]);

  return (
    <div className={classList} style={styleList} {...attrs}>
      {children}
    </div>
  );
};

export default memo(Auto);
