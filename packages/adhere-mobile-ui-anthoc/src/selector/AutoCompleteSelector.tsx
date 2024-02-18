import { List } from 'antd-mobile';
import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompleteSelectorProps, DisplayNameInternal } from '../types';
import Selector from './Selector';

const InternalAutoCompleteSelector = memo<AutoCompleteSelectorProps>(
  ({ selectorProps, ...autoCompleteProps }) => (
    <AutoComplete
      autoCompleteProps={{
        renderResultItem: (record) => <List.Item {...record} />,
        ...(autoCompleteProps ?? {}),
      }}
    >
      {({ value, onChange, searchDataSource }) => (
        <Selector
          value={value}
          onChange={onChange}
          {...(selectorProps ?? {})}
          options={searchDataSource}
        />
      )}
    </AutoComplete>
  ),
);

const AutoCompleteSelector = InternalAutoCompleteSelector as DisplayNameInternal<
  typeof InternalAutoCompleteSelector
>;
AutoCompleteSelector.displayName = 'AutoCompleteSelector';

export default AutoCompleteSelector;
