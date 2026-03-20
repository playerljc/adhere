import React, { type FC, useContext } from 'react';

import { Select } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import { SELECT_PREFIX } from '../../../constant';
import { type DataSourceManagerFormItemProps } from '../index';

export type DynamicProps = DataSourceManagerFormItemProps;

const selectorPrefix = `${SELECT_PREFIX}-design-field-data-source-form-item-dynamic`;

const Dynamic: FC<DynamicProps> = ({ value, onChange }) => {
  const { getDesignValue } = useContext(DesignContext);

  const designValue = getDesignValue();

  const dataSourceConfig = designValue?.dataSourceConfig ?? [];

  return (
    <div className={selectorPrefix}>
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
  );
};

export default Dynamic;
