import React, { FC, useEffect, useState } from 'react';

import { Checkbox } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { CheckBoxCheckAllVerticalFormItemProps } from '../../types';
import CheckBoxVerticalFormItem from '../CheckBoxVerticalFormItem';

/**
 * CheckBoxCheckAllVerticalFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const CheckBoxCheckAllVerticalFormItem: FC<CheckBoxCheckAllVerticalFormItemProps> = ({
  dataSource,
  ...props
}) => {
  const [checkAll, setCheckAll] = useState<boolean>(
    (props.value || []).length === dataSource.length,
  );

  useEffect(() => {
    setCheckAll((props.value || []).length === dataSource.length);
  }, [props.value, dataSource]);

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          checked={checkAll}
          onChange={(e) => {
            if (e.target.checked) {
              props?.onChange?.(dataSource.map((t) => t.value));
            } else {
              props?.onChange?.([]);
            }
          }}
        >
          {Intl.v('全选')}
        </Checkbox>
      </div>

      <div>
        <CheckBoxVerticalFormItem {...props} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default CheckBoxCheckAllVerticalFormItem;