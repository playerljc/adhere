import React, { type FC } from 'react';

import { SELECT_PREFIX } from '../../constant';

const selectorPrefix = `${SELECT_PREFIX}-design-field-actions`;

interface DesignFieldAction {
  key: string;
  label: string;
  icon?: React.ReactNode;
  handler?: () => void;
}

interface DesignFieldActionsProps {
  items: DesignFieldAction[];
}

const DesignFieldActions: FC<DesignFieldActionsProps> = ({ items }) => {
  return (
    <div className={selectorPrefix}>
      <ul>
        {items.map(({ label, icon, key, handler }) => (
          <li key={key} onClick={handler} title={label}>
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesignFieldActions;
