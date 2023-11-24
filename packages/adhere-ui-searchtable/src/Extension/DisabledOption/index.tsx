import classNames from 'classnames';
import React from 'react';

import { selectorPrefix } from '../../SearchTable';

const DisabledOption = ({ className, style, children }) => (
  <div
    className={classNames(`${selectorPrefix}-disabled-option`, className ?? '')}
    style={style ?? {}}
  >
    {children}
  </div>
);

DisabledOption.displayName = 'DisabledOption';

export default DisabledOption;
