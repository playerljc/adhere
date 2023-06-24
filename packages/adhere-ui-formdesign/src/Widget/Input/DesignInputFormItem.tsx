import React, { memo, useContext } from 'react';
import type { FC } from 'react';

import DropHelp from '../../Widget/DropHelp';
import { DNDWidgetProps } from '../../types/WidgetTypes';
import { DNDWidgetContext } from '../DNDWidget';
import InputFormItem from './InputFormItem';

/**
 * DesignInputFormItem
 * @description DesignInputFormItem
 * @param props
 * @constructor
 */
const DesignInputFormItem: FC<DNDWidgetProps> = (props) => {
  const { isOverCurrent } = useContext(DNDWidgetContext);

  return (
    <>
      <InputFormItem {...props} />
      {isOverCurrent && <DropHelp />}
    </>
  );
};

export default memo(DesignInputFormItem);
