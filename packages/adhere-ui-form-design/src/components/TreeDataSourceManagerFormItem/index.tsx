import { Segmented } from 'antd';
import React, { type FC } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import Dynamic from './Dynamic';
import Static from './Static';

export type TreeDataSourceManagerFormItemValue = {
  type: 'static' | 'dynamic';
  treeDataJson?: string;
  dynamicConfigId?: string;
};

export interface TreeDataSourceManagerFormItemProps {
  value?: TreeDataSourceManagerFormItemValue;
  onChange?: (value: TreeDataSourceManagerFormItemValue) => void;
}

const selectorPrefix = `${SELECT_PREFIX}-design-field-tree-data-source-form-item`;

const TreeDataSourceManagerFormItem: FC<TreeDataSourceManagerFormItemProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className={selectorPrefix}>
      <div className={`${selectorPrefix}-actions`}>
        <Segmented
          value={value?.type}
          onChange={(_value) => {
            onChange?.({
              ...(value ?? {}),
              type: _value as TreeDataSourceManagerFormItemValue['type'],
            });
          }}
          options={[
            {
              label: Intl.get('static'),
              value: 'static',
            },
            {
              label: Intl.get('dynamic'),
              value: 'dynamic',
            },
          ]}
        />
      </div>

      <div className={`${selectorPrefix}-body`}>
        {value?.type === 'static' && <Static value={value} onChange={onChange} />}

        {value?.type === 'dynamic' && <Dynamic value={value} onChange={onChange} />}
      </div>
    </div>
  );
};

export default TreeDataSourceManagerFormItem;
