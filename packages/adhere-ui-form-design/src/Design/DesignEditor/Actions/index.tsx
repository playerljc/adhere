import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import { SELECT_PREFIX } from '../../../constant';
import { ActionsProps } from '../../../types';

const selectPrefix = `${SELECT_PREFIX}-design-editor`;

const Actions: FC<ActionsProps> = () => {
  return <div className={classNames(`${selectPrefix}-actions`)}>actions</div>;
};

export default Actions;
