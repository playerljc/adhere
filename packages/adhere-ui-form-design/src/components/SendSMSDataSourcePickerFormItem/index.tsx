import React, { type FC, useContext, useMemo, useState } from 'react';

import { ProductOutlined } from '@ant-design/icons';
import { Select } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../Design/Context';
import { SELECT_PREFIX } from '../../constant';
import DataSourceManager from '../DataSourceManager';
import type { DataSourceManagerFormItemValue } from '../DataSourceManagerFormItem';

export interface SendSMSDataSourcePickerFormItemProps {
  value?: DataSourceManagerFormItemValue;
  onChange?: (value: DataSourceManagerFormItemValue) => void;
}

const selectorPrefix = `${SELECT_PREFIX}-send-sms-data-source-picker`;

/**
 * SendSMSDataSourcePickerFormItem
 * @description 发送验证码数据源选择：左侧回显摘要，右侧选择/管理
 */
const SendSMSDataSourcePickerFormItem: FC<SendSMSDataSourcePickerFormItemProps> = ({
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const { getDesignValue } = useContext(DesignContext);
  const designValue = getDesignValue();
  const dataSourceConfig = designValue?.dataSourceConfig ?? [];

  const selected = useMemo(() => {
    const id = value?.dynamicConfigId;
    if (!id) return null;
    return dataSourceConfig.find((c) => c.id === id) ?? null;
  }, [dataSourceConfig, value?.dynamicConfigId]);

  const summary = useMemo(() => {
    if (!selected) return '';
    const method = selected.request?.method?.toUpperCase?.() ?? '';
    const name = selected.name ?? '';
    return `${method} -> ${name || '—'}`;
  }, [selected]);

  return (
    <>
      <div className={selectorPrefix}>
        <div
          className={`${selectorPrefix}-info ${summary ? '' : `${selectorPrefix}-info-empty`}`}
          title={summary || Intl.get('send_sms_data_source_placeholder')}
        >
          {summary || Intl.get('send_sms_data_source_placeholder')}
        </div>

        <div className={`${selectorPrefix}-actions`}>
          <Select
            className={`${selectorPrefix}-select`}
            placeholder={Intl.get('send_sms_data_source_select')}
            options={dataSourceConfig.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
            value={value?.dynamicConfigId}
            onChange={(_value: string) => {
              onChange?.({
                ...(value ?? { type: 'dynamic' }),
                type: 'dynamic',
                dynamicConfigId: _value,
              });
            }}
            allowClear
          />

          <div className={`${selectorPrefix}-manager-trigger`} onClick={() => setOpen(true)}>
            <ProductOutlined />
          </div>
        </div>
      </div>

      <DataSourceManager open={open} onOpenChange={setOpen} />
    </>
  );
};

export default SendSMSDataSourcePickerFormItem;
