import classNames from 'classnames';
import React from 'react';

import { selectorPrefix } from './TableGridLayout';

export default (props) => {
  const { className, ..._props } = props;

  return (
    <td className={classNames(`${selectorPrefix}-table-row-value`, className ?? '')} {..._props}>
      {props.children}
    </td>
  );
};
