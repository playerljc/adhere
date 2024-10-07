import { Image, List } from 'antd-mobile';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';
import { DEFAULT_TREE_UTIL_CONFIG } from '@baifendian/adhere-mobile-ui-tree/src/Constant';
import Util from '@baifendian/adhere-util';

import MobileAutoComplete from '../src';

import '../src/index.less';

const TREE_DATA = [
  {
    key: 'parent 1',
    title: 'parent 1Text',
    children: [
      {
        key: 'parent 1-0',
        title: 'parent 1-0Text',
        children: [
          {
            key: 'leaf1',
            title: 'leaf1Text',
          },
          {
            key: 'leaf2',
            title: 'leaf2Text',
          },
        ],
      },
      {
        key: 'parent 1-1',
        title: 'parent 1-1Text',
        children: [
          {
            key: 'leaf3',
            title: 'leaf3Text',
          },
        ],
      },
    ],
  },
];

const FLAT_TREE_DATA = Util.treeToArray(
  TREE_DATA,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'key',
);

const defaultTreeData = {
  key: 'leaf2',
  value: [
    {
      key: 'parent 1',
      title: 'parent 1',
      children: [
        {
          key: 'parent 1-0',
          title: 'parent 1-0',
          children: [
            {
              key: 'leaf2',
              title: 'leaf2',
            },
          ],
        },
      ],
    },
  ],
};

const flatDefaultTreeData = {
  key: 'leaf2',
  value: Util.treeToArray(
    defaultTreeData.value,
    {
      parentIdAttr: 'pId',
      rootParentId: 0,
    },
    'key',
  ),
};

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);

  const [value, setValue] = useState([TREE_DATA[0].children[0].children[0].key]);

  return (
    <MobileAutoComplete.TreeAutoComplete
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      value={value}
      valueProp="key"
      treeSelectProps={{
        treeDataSimpleMode: true,
      }}
      defaultDataSource={[TREE_DATA[0].children[0].children[0]]}
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            setSearchDataSource([]);
            resolve();
            return;
          }

          setTimeout(() => {
            // 正常
            // const flatTreeData = Util.treeToArray(
            //   TREE_DATA,
            //   { parentIdAttr: 'pId', rootParentId: 0 },
            //   'key',
            // );
            //
            // const result = flatTreeData.filter((_node) => _node.title.indexOf(_kw) !== -1);
            //
            // const targetTreeData = Util.completionIncompleteFlatArr(flatTreeData, result, {
            //   keyAttr: 'key',
            //   titleAttr: 'title',
            //   parentIdAttr: 'pId',
            //   rootParentId: 0,
            // });

            // flat
            const result = FLAT_TREE_DATA.filter((_node) => _node.title.indexOf(_kw) !== -1);

            const all = Util.completionIncompleteFlatArr(FLAT_TREE_DATA, result, {
              keyAttr: 'key',
              titleAttr: 'title',
              parentIdAttr: 'pId',
              rootParentId: 0,
            });

            const targetTreeData = Util.treeToArray(
              all,
              {
                parentIdAttr: 'pId',
                rootParentId: 0,
              },
              'key',
            );

            // const a = Util.arrayToAntdTreeSelect(targetTreeData, {
            //   keyAttr: 'key',
            //   titleAttr: 'title',
            //   parentIdAttr: 'pId',
            //   rootParentId: 0,
            // });

            setSearchDataSource(JSON.parse(JSON.stringify(targetTreeData)));

            resolve();
          }, 100);
        });
      }}
      onChange={(_value) => {
        setValue(_value);
      }}
      searchDataSource={searchDataSource}
      renderResultItem={(record) => {
        return (
          <List>
            <List.Item
              prefix={
                <Image
                  src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={40}
                  height={40}
                />
              }
              description={record.title}
            >
              {record.t}
            </List.Item>
          </List>
        );
      }}
    />
  );
};
