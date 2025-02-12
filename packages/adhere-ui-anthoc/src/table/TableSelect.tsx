import React, { memo, useMemo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { DisplayNameInternal, TableSelectProps } from '../types';
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
const InternalTableSelect = memo<TableSelectProps>(({ tableProps, ...props }) => {
  const isMultiple = useMemo(() => 'mode' in props && props.mode === 'multiple', [props.mode]);
  const renderProps = useRenderProps(tableProps);

  return (
    <DropdownRenderSelect {...props}>
      {({ originNode, ...rest }) => {
        const tableProps = renderProps(rest);

        return (
          <>
            {isMultiple && <CheckboxTable {...tableProps} />}
            {!isMultiple && <RadioTable {...tableProps} />}
          </>
        );
      }}
    </DropdownRenderSelect>
  );
});

const TableSelect = InternalTableSelect as DisplayNameInternal<typeof InternalTableSelect>;
TableSelect.displayName = 'TablePaging';

export default TableSelect;
