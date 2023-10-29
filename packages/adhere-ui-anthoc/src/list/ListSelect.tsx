import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { ListSelectProps } from '../types';
import CheckboxList from './CheckboxList';
import RadioList from './RadioList';

/**
 * ListSelect
 * @description ListSelect，单选或多选
 * @param listProps
 * @param props
 * @constructor
 */
const ListSelect: FC<ListSelectProps> = ({ listProps, ...props }) => (
  <DropdownRenderSelect {...props}>
    {({ value, onChange, options }) => (
      <>
        {'mode' in props && props.mode === 'multiple' && (
          <CheckboxList
            value={value}
            onChange={(v) => onChange?.(v, [])}
            options={options}
            {...(listProps ?? {})}
          />
        )}
        {!('mode' in props) && (
          <RadioList
            value={value}
            onChange={(v) => onChange?.(v, [])}
            options={options}
            {...(listProps ?? {})}
          />
        )}
      </>
    )}
  </DropdownRenderSelect>
);

export default memo(ListSelect);
