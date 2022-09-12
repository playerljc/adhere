import React, { FC } from 'react';
import classNames from 'classnames';

import { AutoProps } from './types';

const selectorPrefix = 'adhere-ui-flexlayout-auto';

const Auto: FC<AutoProps> = (props) => {
  const { children, className = '', style = {}, autoFixed = true, fit = true } = props;

  return (
    <div
      className={classNames(
        selectorPrefix,
        `${autoFixed ? selectorPrefix + '-autoFixed' : ''}`,
        `${fit ? selectorPrefix + '-fit' : ''}`,
        className,
      )}
      style={style || {}}
    >
      {children}
    </div>
  );
};

export default Auto;
