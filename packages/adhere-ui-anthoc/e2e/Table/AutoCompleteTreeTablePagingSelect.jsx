import Mock from 'mockjs';
import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import { TreeEntityValueHOC } from '../../src/index';
import Table from '../../src/table';

function genChildren(length) {
  return Array.from({ length: length }).map(() => {
    const title = Mock.mock('@name');
    const value = Mock.mock('@guid');

    return {
      value,
      title,
      id: value,
      name: title,
      address: Mock.mock('@region'),
      height: Mock.mock('@integer(60, 100)'),
      width: Mock.mock('@integer(60, 100)'),
      nativePlace: Mock.mock('@city'),
    };
  });
}

const TREE_DATA = Array.from({ length: 100 }).map(() => {
  const title = Mock.mock('@name');
  const value = Mock.mock('@guid');

  return {
    value,
    title,
    id: value,
    name: title,
    address: Mock.mock('@region'),
    height: Mock.mock('@integer(60, 100)'),
    width: Mock.mock('@integer(60, 100)'),
    nativePlace: Mock.mock('@city'),
    children: genChildren(5).map((t) => ({
      ...t,
      children: genChildren(5),
    })),
  };
});

const FLAT_TREE_DATA = Util.treeToArray(
  TREE_DATA,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'id',
);

export default () => {
  const [value, setValue] = useState([TREE_DATA[0].children[0].children[0]]);
  // const [value, setValue] = useState([FLAT_TREE_DATA[2].value]);

  function loadData(page, limit, _kw) {
    console.log(page, limit, _kw);
    return new Promise((resolve) => {
      // 拉平
      // if (!_kw) {
      //   resolve({
      //     totalCount: 0,
      //     data: [],
      //   });
      //   return;
      // }
      //
      // setTimeout(() => {
      //   const result = FLAT_TREE_DATA.filter((_node) => _node.title.indexOf(_kw) !== -1);
      //
      //   const targetTreeData = Util.treeToArray(
      //     Util.completionIncompleteFlatArr(FLAT_TREE_DATA, result, {
      //       keyAttr: 'value',
      //       titleAttr: 'title',
      //       parentIdAttr: 'pId',
      //       rootParentId: '',
      //     }),
      //     {
      //       parentIdAttr: 'pId',
      //       rootParentId: 0,
      //     },
      //     'id',
      //   );
      //
      //   resolve({
      //     totalCount: targetTreeData.length,
      //     data: targetTreeData.slice((page - 1) * limit, page * limit),
      //   });
      // }, 100);
      // ----------------------------------------------
      // 正常
      if (!_kw) {
        resolve({
          totalCount: 0,
          data: [],
        });
        return;
      }

      setTimeout(() => {
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

        resolve({
          totalCount: targetTreeData.length,
          data: targetTreeData.slice((page - 1) * limit, page * limit),
        });
      }, 100);
    });
  }

  return (
    <TreeEntityValueHOC value={value} onChange={setValue}>
      <Table.AutoCompleteTreeTablePagingSelect
        defaultTreeData={[
          {
            ...TREE_DATA[0],
            children: [
              {
                ...TREE_DATA[0].children[0],
                children: [TREE_DATA[0].children[0].children[0]],
              },
            ],
          },
        ]}
        // defaultTreeData={[FLAT_TREE_DATA[0], FLAT_TREE_DATA[1], FLAT_TREE_DATA[2]]}
        // treeDataSimpleMode
        placeholder="AutoCompleteTreeTablePagingSelect"
        style={{ width: 800 }}
        // dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
        multiple
        // value={value}
        // onChange={setValue}
        pagingProps={{
          loadData,
          defaultLimit: 5,
        }}
        tablePagingProps={{
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
        }}
      />
    </TreeEntityValueHOC>
  );
};
