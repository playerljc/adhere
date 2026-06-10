import { Segmented } from 'antd';
import React, { type FC, useEffect } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import type { I18nValue } from '../../types';
import Dynamic from './Dynamic';
import Static from './Static';

export interface DataSourceItem {
  label: string | I18nValue;
  value: string | number;
  [key: string]: any;
}

export type DataSource = DataSourceItem[];

export type DataSourceManagerFormItemValue = {
  type: 'static' | 'dynamic';
  dataSource?: DataSource;
  dynamicConfigId?: string;
  // request?: {
  //   url: string;
  //   method: 'get' | 'post' | 'put' | 'delete';
  //   headers?: Record<string, string>;
  //   // 响应状态的key
  //   codeKey?: string;
  //   // 响应状态的key
  //   codeSuccess?: number;
  //   // 响应数据的key
  //   dataKey?: string;
  // };
  // response?: {
  //   headers?: Record<string, string>;
  // };
};

export interface DataSourceManagerFormItemProps {
  value?: DataSourceManagerFormItemValue;
  onChange?: (value: DataSourceManagerFormItemValue) => void;
}

const selectorPrefix = `${SELECT_PREFIX}-design-field-data-source-form-item`;

/**
 * DataSourceManagerFormItem
 */
const DataSourceManagerFormItem: FC<DataSourceManagerFormItemProps> = ({ value, onChange }) => {
  const type = value?.type ?? 'static';

  useEffect(() => {
    // 属性面板首次挂载时 Form 尚未 setFieldsValue，此时 value 为 undefined；
    // 若此时写入默认空 dataSource，会经 onFieldsChange 覆盖 JSON/模板中的静态选项。
    if (value == null) return;
    if (value.type) return;
    onChange?.({
      type: 'static',
      dataSource: value.dataSource ?? [],
      dynamicConfigId: value.dynamicConfigId,
    });
  }, [value?.type, value?.dataSource, value?.dynamicConfigId, onChange]);

  return (
    <div className={selectorPrefix}>
      <div className={`${selectorPrefix}-actions`}>
        <Segmented
          value={type}
          onChange={(_value) => {
            onChange?.({
              // ...(value ?? {}),
              dataSource: [],
              dynamicConfigId: undefined,
              type: _value as DataSourceManagerFormItemValue['type'],
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
        {type === 'static' && <Static value={value} onChange={onChange} />}

        {type === 'dynamic' && <Dynamic value={value} onChange={onChange} />}
      </div>
    </div>
  );
};

export default DataSourceManagerFormItem;
