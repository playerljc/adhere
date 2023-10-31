import React, { memo, useMemo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { ListSelectProps } from '../types';
import CheckboxList from './CheckboxList';
import RadioList from './RadioList';
import useRenderProps from './useRenderProps';

/**
 * ListSelect
 * @description ListSelect，单选或多选
 * @param listProps
 * @param props
 * @constructor
 */
const ListSelect: FC<ListSelectProps> = ({ listProps, ...props }) => {
  const isMultiple = useMemo(() => 'mode' in props && props.mode === 'multiple', [props.mode]);
  const renderProps = useRenderProps(listProps);

  return (
    <DropdownRenderSelect {...props}>
      {({ originNode, ...rest }) => (
        <>
          {isMultiple && <CheckboxList {...renderProps(rest)} />}
          {!isMultiple && <RadioList {...renderProps(rest)} />}
        </>
      )}
    </DropdownRenderSelect>
  );
};

export default memo(ListSelect);
