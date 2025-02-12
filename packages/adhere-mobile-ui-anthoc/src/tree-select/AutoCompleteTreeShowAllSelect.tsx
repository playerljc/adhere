import React, { memo, useMemo } from 'react';

import AutoComplete from '@baifendian/adhere-mobile-ui-auto-complete';
import type { TreeAutoCompleteProps } from '@baifendian/adhere-mobile-ui-auto-complete/es/types';

import type { DisplayNameInternal } from '../types';

/**
 * AutoCompleteTreeSelect
 * @param props
 * @constructor
 */
const InternalAutoCompleteTreeShowAllSelect = memo<TreeAutoCompleteProps>(
  ({ treeSelectProps, ...autoCompleteTreeSelectProps }) => {
    const targetTreeSelectProps = useMemo(
      () => ({
        ...(treeSelectProps ?? {}),
        checkStrictly: false,
      }),
      [treeSelectProps],
    );

    return (
      <AutoComplete.TreeAutoComplete
        {...(autoCompleteTreeSelectProps ?? {})}
        treeSelectProps={targetTreeSelectProps}
      />
    );
  },
);

const AutoCompleteTreeShowAllSelect = InternalAutoCompleteTreeShowAllSelect as DisplayNameInternal<
  typeof InternalAutoCompleteTreeShowAllSelect
>;
AutoCompleteTreeShowAllSelect.displayName = 'AutoCompleteTreeShowAllSelect';

export default AutoCompleteTreeShowAllSelect;
