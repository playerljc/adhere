import React, { memo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { DisplayNameInternal, TagSelectProps } from '../types';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';
import useRenderProps from './useRenderProps';

/**
 * TagSelect
 * @param tagProps
 * @param props
 * @constructor
 */
const InternalTagSelect = memo<TagSelectProps>(({ tagProps, ...props }) => {
  const renderProps = useRenderProps(tagProps);

  return (
    <DropdownRenderSelect {...props}>
      {({ originNode, ...rest }) => (
        <VerticalCheckableTagGroup
          {...renderProps({
            ...rest,
            onChange: (_value) => rest.onChange?.(_value, []),
          })}
          mode={props.mode === 'multiple' ? 'multiple' : 'single'}
        />
      )}
    </DropdownRenderSelect>
  );
});

const TagSelect = InternalTagSelect as DisplayNameInternal<typeof InternalTagSelect>;
TagSelect.displayName = 'TagSelect';

export default TagSelect;
