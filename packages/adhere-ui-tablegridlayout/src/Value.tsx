import classNames from 'classnames';
import React from 'react';

import { selectorPrefix } from './TableGridLayout';

const Value = (props) => {
  const { className, ..._props } = props;

  return (
    <td className={classNames(`${selectorPrefix}-table-row-value`, className ?? '')} {..._props}>
      {props.children}
    </td>
  );
};

Value.displayName = 'Value';

export default Value;
