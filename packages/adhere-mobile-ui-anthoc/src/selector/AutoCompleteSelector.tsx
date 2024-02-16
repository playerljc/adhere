import { List } from 'antd-mobile';
import React, { memo } from 'react';

import type { AutoCompleteSelectorProps, DisplayNameInternal } from '../types';
import useAutoComplete from '../useAutoComplete';
import Selector from './Selector';

const InternalAutoCompleteSelector = memo<AutoCompleteSelectorProps>(
  ({ selectorProps, ...autoCompleteProps }) =>
    useAutoComplete(
      {
        renderResultItem: (record) => <List.Item {...record} />,
        ...autoCompleteProps,
      },
      ({ value, onChange, searchDataSource }) => (
        <Selector
          value={value}
          onChange={onChange}
          {...(selectorProps ?? {})}
          options={searchDataSource}
        />
      ),
    ),
);

const AutoCompleteSelector = InternalAutoCompleteSelector as DisplayNameInternal<
  typeof InternalAutoCompleteSelector
>;
AutoCompleteSelector.displayName = 'AutoCompleteSelector';

export default AutoCompleteSelector;
