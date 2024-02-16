import { List } from 'antd-mobile';
import React, { memo } from 'react';

import type { AutoCompleteCheckboxProps, DisplayNameInternal } from '../types';
import useAutoComplete from '../useAutoComplete';
import CheckboxGroup from './CheckboxGroup';

const InternalAutoCompleteCheckbox = memo<AutoCompleteCheckboxProps>(
  ({ checkboxGroupProps, ...autoCompleteProps }) =>
    useAutoComplete(
      {
        renderResultItem: (record) => <List.Item {...record} />,
        ...autoCompleteProps,
      },
      ({ value, onChange, searchDataSource }) => (
        <CheckboxGroup
          value={value}
          onChange={onChange}
          options={searchDataSource}
          {...(checkboxGroupProps ?? {})}
        />
      ),
    ),
);

const AutoCompleteCheckbox = InternalAutoCompleteCheckbox as DisplayNameInternal<
  typeof InternalAutoCompleteCheckbox
>;
AutoCompleteCheckbox.displayName = 'AutoCompleteCheckbox';

export default AutoCompleteCheckbox;
