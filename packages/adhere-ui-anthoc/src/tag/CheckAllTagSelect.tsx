import React, { memo } from 'react';

import CheckAllMultipleSelect from '../multiple-select/CheckAllMultipleSelect';
import type { CheckAllTagSelectProps, DisplayNameInternal } from '../types';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';
import useRenderProps from './useRenderProps';

/**
 * CheckAllTagSelect
 * @param tagProps
 * @param props
 * @constructor
 */
const IntlanlCheckAllTagSelect = memo<CheckAllTagSelectProps>(({ tagProps, ...props }) => {
  const renderProps = useRenderProps(tagProps, 'multiple');

  return (
    <CheckAllMultipleSelect {...props} mode="multiple">
      {({ originNode, ...rest }) => (
        <VerticalCheckableTagGroup
          {...renderProps({
            ...rest,
            onChange: (_value) => rest.onChange?.(_value, []),
          })}
          mode="multiple"
        />
      )}
    </CheckAllMultipleSelect>
  );
});

const CheckAllTagSelect = IntlanlCheckAllTagSelect as DisplayNameInternal<
  typeof IntlanlCheckAllTagSelect
>;
CheckAllTagSelect.displayName = 'CheckAllTagSelect';

export default CheckAllTagSelect;
