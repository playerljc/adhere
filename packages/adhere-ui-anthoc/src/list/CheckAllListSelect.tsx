import React, { memo } from 'react';
import type { FC } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllListSelectProps } from '../types';
import CheckboxList from './CheckboxList';
import useRenderProps from './useRenderProps';

/**
 * CheckAllListSelect
 * @description 可以全选的ListSelect
 * @param listProps
 * @param props
 * @constructor
 */
const CheckAllListSelect: FC<CheckAllListSelectProps> = ({ listProps, ...props }) => {
  const renderProps = useRenderProps(listProps);

  return (
    <CheckAllMultipleSelect {...props}>
      {({ originNode, ...rest }) => <CheckboxList {...renderProps(rest)} />}
    </CheckAllMultipleSelect>
  );
};

export default memo(CheckAllListSelect);
