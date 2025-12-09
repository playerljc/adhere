import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import { SELECT_PREFIX } from '../../../constant';
import { ActionsProps } from '../../../types/Editor';

const selectPrefix = `${SELECT_PREFIX}-design-editor`;

const Actions: FC<ActionsProps> = () => {
  return <div className={classNames(`${selectPrefix}-actions`)}></div>;
};

export default Actions;
