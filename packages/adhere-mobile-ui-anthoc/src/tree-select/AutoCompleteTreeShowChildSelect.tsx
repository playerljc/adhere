import React, { memo, useMemo } from 'react';

import AutoComplete from '@baifendian/adhere-mobile-ui-auto-complete';
import type { TreeAutoCompleteProps } from '@baifendian/adhere-mobile-ui-auto-complete/es/types';

import type { DisplayNameInternal } from '../types';

/**
 * AutoCompleteTreeShowChildSelect
 * @param props
 * @constructor
 */
const InternalAutoCompleteTreeShowChildSelect = memo<TreeAutoCompleteProps>(
  ({ treeSelectProps, ...autoCompleteTreeSelectProps }) => {
    const targetTreeSelectProps = useMemo(
      () => ({
        ...(treeSelectProps ?? {}),
        checkStrictly: true,
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

const AutoCompleteTreeShowChildSelect =
  InternalAutoCompleteTreeShowChildSelect as DisplayNameInternal<
    typeof InternalAutoCompleteTreeShowChildSelect
  >;
AutoCompleteTreeShowChildSelect.displayName = 'AutoCompleteTreeShowChildSelect';

export default AutoCompleteTreeShowChildSelect;
