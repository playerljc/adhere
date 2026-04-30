import React, { type FC, useContext, useState } from 'react';

import { ProductOutlined } from '@ant-design/icons';
import { Select } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import { SELECT_PREFIX } from '../../../constant';
import DataSourceManager from '../../DataSourceManager';
import type { AreaCodePhoneDataSourceManagerFormItemProps } from '../index';

export type DynamicProps = AreaCodePhoneDataSourceManagerFormItemProps;

const selectorPrefix = `${SELECT_PREFIX}-design-field-area-code-phone-data-source-form-item-dynamic`;

const Dynamic: FC<DynamicProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const { getDesignValue } = useContext(DesignContext);
  const designValue = getDesignValue();
  const dataSourceConfig = designValue?.dataSourceConfig ?? [];

  return (
    <>
      <div className={selectorPrefix}>
        <div className={`${selectorPrefix}-nav`}>
          <Select
            placeholder={Intl.get('data_source_manager')}
            options={dataSourceConfig.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
            value={value?.dynamicConfigId}
            onChange={(_value: string) => {
              onChange?.({
                ...(value ?? {}),
                type: 'dynamic',
                dynamicConfigId: _value,
              });
            }}
          />
        </div>

        <div className={`${selectorPrefix}-manager-trigger`} onClick={() => setOpen(true)}>
          <ProductOutlined />
        </div>
      </div>

      <DataSourceManager open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Dynamic;

