import type { RadioValue } from 'antd-mobile/es/components/radio';
import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompleteRadioProps, DisplayNameInternal } from '../types';
import RadioGroup from './RadioGroup';

const InternalAutoCompleteRadio = memo<AutoCompleteRadioProps>(
  ({ radioGroupProps, ...autoCompleteProps }) => (
    <AutoComplete labelProp="title" {...(autoCompleteProps ?? {})}>
      {({ value, onChange, searchDataSource }) => (
        <RadioGroup
          value={value && value.length ? (value[0] as RadioValue) : null}
          onChange={(_value) => {
            onChange?.([_value]);
          }}
          options={searchDataSource}
          {...(radioGroupProps ?? {})}
        />
      )}
    </AutoComplete>
  ),
);

const AutoCompleteRadio = InternalAutoCompleteRadio as DisplayNameInternal<
  typeof InternalAutoCompleteRadio
>;
AutoCompleteRadio.displayName = 'AutoCompleteRadio';

export default AutoCompleteRadio;
