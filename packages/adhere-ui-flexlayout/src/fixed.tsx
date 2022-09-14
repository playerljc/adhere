import classNames from 'classnames';
import React, { FC } from 'react';

import { FixedProps } from './types';

const selectorPrefix = 'adhere-ui-flexlayout-fixed';

const Fixed: FC<FixedProps> = (props) => {
  const { className, children, style, fit } = props;

  return (
    <div
      className={classNames(
        selectorPrefix,
        `${fit ? selectorPrefix + '-fit' : ''}`,
        className || '',
      )}
      style={style || {}}
    >
      {children}
    </div>
  );
};

export default Fixed;
