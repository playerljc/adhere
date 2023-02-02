import React, { FC, useEffect, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { Checkbox } from '../../AntFormItemNormalize';
import { CheckBoxCheckAllCustomFormItemProps } from '../../types';
import CheckBoxCustomFormItem from '../CheckBoxCustomFormItem';

/**
 * CheckBoxCheckAllCustomFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const CheckBoxCheckAllCustomFormItem: FC<CheckBoxCheckAllCustomFormItemProps> = ({
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
        <CheckBoxCustomFormItem {...props} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default CheckBoxCheckAllCustomFormItem;
