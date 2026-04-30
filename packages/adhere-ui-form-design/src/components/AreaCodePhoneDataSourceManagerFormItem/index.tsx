import { Segmented } from 'antd';
import React, { type FC } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import Dynamic from './Dynamic';
import Static from './Static';

export type AreaCodePhoneDataSourceManagerFormItemValue = {
  type: 'static' | 'dynamic';
  /** 静态数据 JSON 字符串（数组） */
  areaCodeJson?: string;
  /** 动态数据源配置 id（来自设计器 dataSourceConfig） */
  dynamicConfigId?: string;
};

export interface AreaCodePhoneDataSourceManagerFormItemProps {
  value?: AreaCodePhoneDataSourceManagerFormItemValue;
  onChange?: (value: AreaCodePhoneDataSourceManagerFormItemValue) => void;
}

const selectorPrefix = `${SELECT_PREFIX}-design-field-area-code-phone-data-source-form-item`;

const AreaCodePhoneDataSourceManagerFormItem: FC<AreaCodePhoneDataSourceManagerFormItemProps> = ({
  value,
  onChange,
}) => {
  const type = value?.type ?? 'static';

  return (
    <div className={selectorPrefix}>
      <div className={`${selectorPrefix}-actions`}>
        <Segmented
          value={type}
          onChange={(_value) => {
            onChange?.({
              areaCodeJson: undefined,
              dynamicConfigId: undefined,
              type: _value as AreaCodePhoneDataSourceManagerFormItemValue['type'],
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

export default AreaCodePhoneDataSourceManagerFormItem;

