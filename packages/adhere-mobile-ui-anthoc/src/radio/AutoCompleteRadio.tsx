import { List } from 'antd-mobile';
import type { RadioValue } from 'antd-mobile/es/components/radio';
import React, { memo } from 'react';

import type { AutoCompleteRadioProps, DisplayNameInternal } from '../types';
import useAutoComplete from '../useAutoComplete';
import RadioGroup from './RadioGroup';

const InternalAutoCompleteRadio = memo<AutoCompleteRadioProps>(
  ({ radioGroupProps, ...autoCompleteProps }) =>
    useAutoComplete(
      {
        renderResultItem: (record) => <List.Item {...record} />,
        ...autoCompleteProps,
      },
      ({ value, onChange, searchDataSource }) => (
        <RadioGroup
          value={value && value.length ? (value[0] as RadioValue) : null}
          onChange={(_value) => {
            onChange?.([_value]);
          }}
          options={searchDataSource}
          {...(radioGroupProps ?? {})}
        />
      ),
    ),
);

const AutoCompleteRadio = InternalAutoCompleteRadio as DisplayNameInternal<
  typeof InternalAutoCompleteRadio
>;
AutoCompleteRadio.displayName = 'AutoCompleteRadio';

export default AutoCompleteRadio;
