import classNames from 'classnames';
import React from 'react';

import { selectorPrefix } from '../../SearchTable';

export default ({ className, style, children }) => (
  <div
    className={classNames(`${selectorPrefix}-disabledoption`, className ?? '')}
    style={style ?? {}}
  >
    {children}
  </div>
);
