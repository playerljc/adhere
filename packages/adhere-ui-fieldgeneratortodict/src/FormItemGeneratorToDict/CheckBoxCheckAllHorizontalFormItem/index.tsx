import React, { FC, useEffect, useState } from 'react';

import { Checkbox } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { CheckBoxCheckAllHorizontalFormItemProps } from '../../types';
import CheckBoxHorizontalFormItem from '../CheckBoxHorizontalFormItem';

/**
 * CheckBoxCheckAllHorizontalFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const CheckBoxCheckAllHorizontalFormItem: FC<CheckBoxCheckAllHorizontalFormItemProps> = ({
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
        <CheckBoxHorizontalFormItem {...props} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default CheckBoxCheckAllHorizontalFormItem;
