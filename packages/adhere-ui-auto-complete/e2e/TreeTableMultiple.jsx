import { Table } from 'antd';
import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import AutoComplete from '../src/index';
import { TREE_DATA } from './treeData';

import '../src/index.less';

export default () => {
  const [treeData, setTreeData] = useState([]);
  const [value, setValue] = useState([]);

  return (
    <AutoComplete.TreeAutoComplete
      placeholder="请输入关键字"
      value={value}
      style={{ width: 600 }}
      multiple
      treeData={treeData}
      onChange={setValue}
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            setTreeData([]);
            resolve();
            return;
          }

          setTimeout(() => {
            const flatTreeData = Util.treeToArray(
              TREE_DATA,
              { parentIdAttr: 'pId', rootParentId: '' },
              'value',
            );

            const result = flatTreeData.filter((_node) => _node.title.indexOf(_kw) !== -1);

            setTreeData(
              Util.completionIncompleteFlatArr(flatTreeData, result, {
                keyAttr: 'value',
                titleAttr: 'title',
                parentIdAttr: 'pId',
                rootParentId: '',
              }),
            );

            resolve();
          }, 100);
        });
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
          scroll={{ y: 300 }}
          rowKey="id"
          dataSource={_treeData}
          pagination={false}
          rowSelection={{
            type: 'checkbox',
            checkStrictly: false,
            selectedRowKeys: _value,
            onSelect: (record, selected, selectedRows) => {
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
