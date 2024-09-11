// import { TreeSelect } from 'antd';
import { Table } from 'antd';
import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import TreeAutoComplete from '../src/TreeAutoComplete';
import { City, County, Province } from './mock/pcc';

import '../src/index.less';

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

// const FLAT_TREE_DATA = Util.treeToArray(
//   TREE_DATA,
//   {
//     parentIdAttr: 'pId',
//     rootParentId: 0,
//   },
//   'id',
// );

// const defaultTreeData = {
//   key: 'leaf2',
//   value: [
//     {
//       value: 'parent 1',
//       title: 'parent 1',
//       id: 'parent 1',
//       children: [
//         {
//           value: 'parent 1-0',
//           title: 'parent 1-0',
//           id: 'parent 1-0',
//           children: [
//             {
//               value: 'leaf2',
//               title: 'leaf2',
//               id: 'leaf2',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// const flatDefaultTreeData = {
//   key: 'leaf2',
//   value: Util.treeToArray(
//     defaultTreeData.value,
//     {
//       parentIdAttr: 'pId',
//       rootParentId: 0,
//     },
//     'id',
//   ),
// };

export default () => {
  const [treeData, setTreeData] = useState([]);

  const [value, setValue] = useState([] /*['leaf2']*/);

  return (
    <TreeAutoComplete
      value={value}
      style={{ width: 600 }}
      // defaultTreeData={flatDefaultTreeData}
      // defaultTreeData={defaultTreeData}
      multiple
      // treeDataSimpleMode
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
              { parentIdAttr: 'pId', rootParentId: '' },
              'value',
            );

            const result = flatTreeData.filter((_node) => _node.title.indexOf(_kw) !== -1);

            const targetTreeData = Util.completionIncompleteFlatArr(flatTreeData, result, {
              keyAttr: 'value',
              titleAttr: 'title',
              parentIdAttr: 'pId',
              rootParentId: '',
            });

            // flat
            // const result = FLAT_TREE_DATA.filter((_node) => _node.title.indexOf(_kw) !== -1);
            //
            // const targetTreeData = Util.treeToArray(
            //   Util.completionIncompleteFlatArr(FLAT_TREE_DATA, result, {
            //     keyAttr: 'id',
            //     titleAttr: 'title',
            //     parentIdAttr: 'pId',
            //     rootParentId: 0,
            //   }),
            //   {
            //     keyAttr: 'id',
            //     titleAttr: 'title',
            //     parentIdAttr: 'pId',
            //     rootParentId: 0,
            //   },
            // );

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
      {({ value: _value, onChange: _onChange, treeData: _treeData, loading }) => {
        console.log('_value', _value);

        return (
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
        );
      }}
    </TreeAutoComplete>
  );
};
