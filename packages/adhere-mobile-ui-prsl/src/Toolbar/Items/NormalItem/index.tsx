import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import type { ToolbarItemProps } from '../../../types';

const selectorPrefix = 'adhere-mobile-ui-prsl-toolbar-item';

const NormalItem: FC<ToolbarItemProps> = ({ className, style, icon, label, onClick }) => {
  return (
    <div
      className={classNames(selectorPrefix, className ?? '')}
      style={style ?? {}}
      onClick={onClick}
    >
      <div className={classNames(`${selectorPrefix}-icon`)}>{icon}</div>
      <div className={classNames(`${selectorPrefix}-label`)}>{label}</div>
    </div>
  );
};

NormalItem.displayName = 'NormalItem';

export default NormalItem;
