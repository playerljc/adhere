import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC } from 'react';

import { SELECT_PREFIX } from '../../../constant';
import type { ModeChangeProps } from '../../../types';
import { DesignContext } from '../../Context';

const selectPrefix = `${SELECT_PREFIX}-design-editor`;

const ModeChange: FC<ModeChangeProps> = () => {
  const { getTerminal, setCurrentTerminal } = useContext(DesignContext);
  const terminals = getTerminal();

  return <div className={classNames(`${selectPrefix}-mode-change`)}></div>;
};

export default ModeChange;
