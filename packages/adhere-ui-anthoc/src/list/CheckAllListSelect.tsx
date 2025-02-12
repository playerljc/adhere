import React, { memo } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllListSelectProps, DisplayNameInternal } from '../types';
import CheckboxList from './CheckboxList';
import useRenderProps from './useRenderProps';

/**
 * CheckAllListSelect
 * @description 可以全选的ListSelect
 * @param listProps
 * @param props
 * @constructor
 */
const InternalCheckAllListSelect = memo<CheckAllListSelectProps>(({ listProps, ...props }) => {
  const renderProps = useRenderProps(listProps);

  return (
    <CheckAllMultipleSelect {...props}>
      {({ originNode, ...rest }) => <CheckboxList {...renderProps(rest)} />}
    </CheckAllMultipleSelect>
  );
});

const CheckAllListSelect = InternalCheckAllListSelect as DisplayNameInternal<
  typeof InternalCheckAllListSelect
>;
CheckAllListSelect.displayName = 'CheckAllListSelect';

export default CheckAllListSelect;
