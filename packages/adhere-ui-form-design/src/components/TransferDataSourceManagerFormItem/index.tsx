import { Segmented } from 'antd';
import React, { type FC } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import type { I18nValue } from '../../types';
import Dynamic from './Dynamic';
import Static from './Static';

export interface TransferDataSourceItem {
  key: string;
  title: I18nValue | string;
  description?: I18nValue | string;
  disabled?: boolean;
}

export type TransferDataSource = TransferDataSourceItem[];

export type TransferDataSourceManagerFormItemValue = {
  type: 'static' | 'dynamic';
  dataSource?: TransferDataSource;
  dynamicConfigId?: string;
};

export interface TransferDataSourceManagerFormItemProps {
  value?: TransferDataSourceManagerFormItemValue;
  onChange?: (value: TransferDataSourceManagerFormItemValue) => void;
}

const selectorPrefix = `${SELECT_PREFIX}-design-field-transfer-data-source-form-item`;

const TransferDataSourceManagerFormItem: FC<TransferDataSourceManagerFormItemProps> = ({
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
              dataSource: [],
              dynamicConfigId: undefined,
              type: _value as TransferDataSourceManagerFormItemValue['type'],
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

export default TransferDataSourceManagerFormItem;
