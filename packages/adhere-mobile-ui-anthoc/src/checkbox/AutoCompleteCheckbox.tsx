import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompleteCheckboxProps, DisplayNameInternal } from '../types';
import CheckboxGroup from './CheckboxGroup';

const InternalAutoCompleteCheckbox = memo<AutoCompleteCheckboxProps>(
  ({ checkboxGroupProps, ...autoCompleteProps }) => (
    <AutoComplete labelProp="title" {...(autoCompleteProps ?? {})}>
      {({ value, onChange, searchDataSource }) => (
        <CheckboxGroup
          value={value}
          onChange={onChange}
          options={searchDataSource}
          {...(checkboxGroupProps ?? {})}
        />
      )}
    </AutoComplete>
  ),
);

const AutoCompleteCheckbox = InternalAutoCompleteCheckbox as DisplayNameInternal<
  typeof InternalAutoCompleteCheckbox
>;
AutoCompleteCheckbox.displayName = 'AutoCompleteCheckbox';

export default AutoCompleteCheckbox;
