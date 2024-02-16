import { List } from 'antd-mobile';
import React, { memo } from 'react';

import type { AutoCompleteCheckboxCheckListProps, DisplayNameInternal } from '../types';
import useAutoComplete from '../useAutoComplete';
import CheckboxCheckList from './CheckboxCheckList';

const InternalAutoCompleteCheckboxCheckList = memo<AutoCompleteCheckboxCheckListProps>(
  ({ checkListProps, ...autoCompleteProps }) =>
    useAutoComplete(
      {
        renderResultItem: (record) => <List.Item {...record} />,
        ...autoCompleteProps,
      },
      ({ value, onChange, searchDataSource }) => (
        <CheckboxCheckList
          value={value}
          onChange={onChange}
          options={searchDataSource}
          {...(checkListProps ?? {})}
        />
      ),
    ),
);

const AutoCompleteCheckboxCheckList = InternalAutoCompleteCheckboxCheckList as DisplayNameInternal<
  typeof InternalAutoCompleteCheckboxCheckList
>;
AutoCompleteCheckboxCheckList.displayName = 'AutoCompleteCheckboxCheckList';

export default AutoCompleteCheckboxCheckList;
