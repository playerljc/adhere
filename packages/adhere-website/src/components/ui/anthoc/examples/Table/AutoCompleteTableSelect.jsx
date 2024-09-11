import Mock from 'mockjs';
import React, { useContext, useState } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { Table } from '@baifendian/adhere-ui-anthoc';

import styles from '../examples.less';

const dataSource = Array.from({ length: 100 }).map(() => {
  const label = Mock.mock('@name');
  const value = Mock.mock('@guid');

  return {
    id: value,
    name: label,
    address: Mock.mock('@region'),
    height: Mock.mock('@integer(60, 100)'),
    width: Mock.mock('@integer(60, 100)'),
    nativePlace: Mock.mock('@city'),
    label,
    value,
  };
});

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState(undefined);

  const { media } = useContext(ConfigProvider.Context);

  return (
    <Table.AutoCompleteTableSelect
      // mode="multiple"
      placeholder="AutoCompleteTableSelect"
      className={styles.FieldWrapper}
      dropdownStyle={{ maxHeight: Util.pxToRem(300, media.designWidth, media), overflow: 'auto' }}
      value={value}
      options={options}
      onChange={setValue}
      loadData={(_kw) =>
        new Promise((resolve) => {
          if (!_kw) {
            setOptions([]);
            resolve();
            return;
          }

          setTimeout(() => {
            const result = [...dataSource].filter((_record) => _record.label.indexOf(_kw) !== -1);

            setOptions(result);

            resolve();
          }, 500);
        })
      }
      tableProps={{
        rowKey: 'id',
        columns: [
          {
            title: '名称',
            key: 'name',
            dataIndex: 'name',
          },
          {
            title: '地址',
            key: 'address',
            dataIndex: 'address',
          },
          {
            title: '籍贯',
            key: 'nativePlace',
            dataIndex: 'nativePlace',
          },
          {
            title: '身高',
            key: 'height',
            dataIndex: 'height',
          },
          {
            title: '体重',
            key: 'width',
            dataIndex: 'width',
          },
        ],
        pagination: false,
      }}
    />
  );
};
