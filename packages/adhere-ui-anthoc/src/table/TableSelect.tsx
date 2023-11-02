import React, { memo, useMemo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { TableSelectProps } from '../types';
import CheckboxTable from './CheckboxTable';
import RadioTable from './RadioTable';
import useRenderProps from './useRenderProps';

/**
 * TableSelect
 * @description TableSelect，单选或多选
 * @param tableProps
 * @param props
 * @constructor
 */
const TableSelect: FC<TableSelectProps> = ({ tableProps, ...props }) => {
  const isMultiple = useMemo(() => 'mode' in props && props.mode === 'multiple', [props.mode]);
  const renderProps = useRenderProps(tableProps);

  return (
    <DropdownRenderSelect {...props}>
      {({ originNode, ...rest }) => (
        <>
          <>
            {isMultiple && <CheckboxTable {...renderProps(rest)} />}
            {!isMultiple && <RadioTable {...renderProps(rest)} />}
          </>
        </>
      )}
    </DropdownRenderSelect>
  );
};

export default memo(TableSelect);
