import React, { type FC, type ReactElement } from 'react';

import { SELECT_PREFIX } from '../../constant';

const selectorPrefix = `${SELECT_PREFIX}-design-field-actions`;

export interface DesignFieldAction {
  key: string;
  label: string;
  icon: ReactElement;
  el: ReactElement;
}

export interface DesignFieldActionsProps {
  items: DesignFieldAction[];
}

/**
 * DesignFieldActions
 * @description Field工具栏外框
 * @param items
 * @constructor
 */
const DesignFieldActions: FC<DesignFieldActionsProps> = ({ items }) => {
  return (
    !!items &&
    !!items.length && (
      <div className={selectorPrefix}>
        <ul>
          {items.map(({ key, label, el }) => (
            <li key={key} title={label}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default DesignFieldActions;
