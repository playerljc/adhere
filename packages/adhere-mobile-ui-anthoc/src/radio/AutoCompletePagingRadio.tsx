import type { RadioValue } from 'antd-mobile/es/components/radio';
import React, { memo } from 'react';

import AutoComplete from '../AutoComplete';
import type { AutoCompletePagingRadioProps, DisplayNameInternal } from '../types';
import PagingRadio from './PagingRadio';

const InternalAutoCompletePagingRadio = memo<AutoCompletePagingRadioProps>(
  ({ pagingRadioProps, ...autoCompleteProps }) => {
    return (
      <AutoComplete labelProp="title" {...(autoCompleteProps ?? {})}>
        {({ value, onChange, searchDataSource }) => (
          <PagingRadio
            value={value && value.length ? (value[0] as RadioValue) : null}
            onChange={(_value) => {
              onChange?.([_value]);
            }}
            options={searchDataSource}
            {...(pagingRadioProps ?? {})}
          />
        )}
      </AutoComplete>
    );
  },
);

const AutoCompletePagingRadio = InternalAutoCompletePagingRadio as DisplayNameInternal<
  typeof InternalAutoCompletePagingRadio
>;
AutoCompletePagingRadio.displayName = 'AutoCompletePagingRadio';

export default AutoCompletePagingRadio;
