import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { TableSelectProps } from '../types';
import CheckboxTable from './CheckboxTable';
import RadioTable from './RadioTable';

/**
 * TableSelect
 * @description TableSelect，单选或多选
 * @param tableProps
 * @param props
 * @constructor
 */
const TableSelect: FC<TableSelectProps> = ({ tableProps, ...props }) => (
  <DropdownRenderSelect {...props}>
    {({ value, onChange, options }) => (
      <>
        {'mode' in props && props.mode === 'multiple' && (
          <CheckboxTable
            value={value}
            onChange={(v) => onChange?.(v, [])}
            options={options}
            {...(tableProps ?? {})}
          />
        )}
        {!('mode' in props) && (
          <RadioTable
            value={value}
            onChange={(v) => {
              onChange?.(v, []);
            }}
            options={options}
            {...(tableProps ?? {})}
          />
        )}
      </>
    )}
  </DropdownRenderSelect>
);

export default memo(TableSelect);
