import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';

import type { SystemSideTabProps } from '../types';

const selectorPrefix = 'adhere-ui-tabs-side-tab';

const Tab: FC<SystemSideTabProps> = (props) => {
  const { className = '', style = {}, children } = props;

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      {children}
    </div>
  );
};

export default Tab;
