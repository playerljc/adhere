import { Table } from 'antd';
import React, { useState } from 'react';

import { AutoComplete, Util } from '@baifendian/adhere';

import styles from '../../anthoc/examples/Cascader/index.less';

const TREE_DATA = [
  {
    value: 'parent 1',
    title: 'parent 1',
    id: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        id: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
            id: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
            id: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        id: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: 'leaf3',
            id: 'leaf3',
          },
        ],
      },
    ],
  },
];

export default () => {
  const [treeData, setTreeData] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <AutoComplete.TreeAutoComplete
      value={value}
      className={styles.Wrapper3}
      multiple
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            setTreeData([]);
            resolve();
            return;
          }

          setTimeout(() => {
            // 正常

            const flatTreeData = Util.treeToArray(
              TREE_DATA,
              { parentIdAttr: 'pId', rootParentId: 0 },
              'value',
            );

            const result = flatTreeData.filter((_node) => _node.title.indexOf(_kw) !== -1);

            const targetTreeData = Util.completionIncompleteFlatArr(flatTreeData, result, {
              keyAttr: 'value',
              titleAttr: 'title',
              parentIdAttr: 'pId',
              rootParentId: 0,
            });

            setTreeData(targetTreeData);

            resolve();
          }, 100);
        });
      }}
      treeData={treeData}
      onChange={(_value) => {
        setValue(_value);
      }}
    >
      {({ value: _value, onChange: _onChange, treeData: _treeData, loading }) => (
        <Table
          loading={loading}
          columns={[
            {
              title: '名称',
              key: 'title',
              dataIndex: 'title',
            },
          ]}
          scroll={{
            y: 300,
          }}
          rowKey="id"
          dataSource={_treeData}
          pagination={false}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: _value,
            onSelect: function (record, selected, selectedRows) {
              _onChange(
                selectedRows.map((t) => t.value),
                selectedRows.map((t) => t.title),
                {
                  selected,
                  triggerNode: {
                    props: record,
                  },
                },
              );
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
              _onChange(
                selectedRows.map((t) => t.value),
                selectedRows.map((t) => t.title),
                {
                  selected,
                  triggerNode: selected
                    ? {
                        props: changeRows,
                      }
                    : null,
                },
              );
            },
          }}
        />
      )}
    </AutoComplete.TreeAutoComplete>
  );
};
