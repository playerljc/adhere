import React, { FC, useEffect, useState } from 'react';

import { Checkbox, Divider } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { CheckAllFormItemProps } from '../../types';
import MultiSelectFormItem from '../MultiSelectFormItem';

const selectorPrefix = 'adhere-ui-antdformitem';

/**
 * CheckAllMultiSelectFormItem
 * @param props
 * @constructor
 */
const CheckAllMultiSelectFormItem: FC<CheckAllFormItemProps> = (props) => {
  const [checked, setChecked] = useState(false);

  function onCheckAllChange(e) {
    setChecked(e.target.checked);

    if (props.onCheckAllChange) {
      props.onCheckAllChange(e.target.checked);
    }
  }

  function onChange(value) {
    setChecked(value.length === (props.dataSource || []).map((t) => t.value).length);

    props?.selectProps?.onChange?.(value);
  }

  function renderDropdownRender(menu) {
    return (
      <div className={`${selectorPrefix}-wrap`}>
        <div className={`${selectorPrefix}-wrap-checkallwrap`}>
          <Checkbox checked={checked} onChange={onCheckAllChange}>
            {Intl.v('全选')}
          </Checkbox>
        </div>
        <Divider style={{ margin: '4px 0' }} />
        {menu}
      </div>
    );
  }

  useEffect(() => {
    setChecked(
      JSON.stringify(JSON.parse(JSON.stringify(props?.selectProps?.value || [])).sort()) ===
        JSON.stringify((props.dataSource || []).map((t) => t.value).sort()),
    );
  }, [props?.selectProps?.value, props.dataSource]);

  return (
    <MultiSelectFormItem
      selectProps={{
        ...props.selectProps,
        dropdownRender: renderDropdownRender,
        onChange,
      }}
      dataSource={props.dataSource}
    />
  );
};

export default CheckAllMultiSelectFormItem;
