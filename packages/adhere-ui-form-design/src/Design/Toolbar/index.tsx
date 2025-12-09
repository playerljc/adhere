import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import { SELECT_PREFIX } from '../../constant';
import type { ToolbarProps } from '../../types/Design';

const selectPrefix = `${SELECT_PREFIX}-design-toolbar`;

/**
 * Toolbar
 */
const Toolbar: FC<ToolbarProps> = () => {
  return <div className={classNames(selectPrefix)}>Toolbar</div>;
};

export default Toolbar;
