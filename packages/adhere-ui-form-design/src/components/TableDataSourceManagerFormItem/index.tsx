import { Segmented } from 'antd';
import React, { type FC } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import Dynamic from './Dynamic';
import Static from './Static';

export type TableDataSourceManagerFormItemValue = {
  type: 'static' | 'dynamic';
  dataSourceJson?: string;
  dynamicConfigId?: string;
};

export interface TableDataSourceManagerFormItemProps {
  value?: TableDataSourceManagerFormItemValue;
  onChange?: (value: TableDataSourceManagerFormItemValue) => void;
}

const selectorPrefix = `${SELECT_PREFIX}-design-field-table-data-source-form-item`;

const TableDataSourceManagerFormItem: FC<TableDataSourceManagerFormItemProps> = ({
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
              type: _value as TableDataSourceManagerFormItemValue['type'],
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

export default TableDataSourceManagerFormItem;
