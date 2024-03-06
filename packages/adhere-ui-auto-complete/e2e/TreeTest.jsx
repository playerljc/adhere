import { TreeSelect } from 'antd';
import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import TreeAutoComplete from '../src/TreeAutoComplete.tsx';
import data from './mock/tree';

import '../src/index.less';

export default () => {
  // 简单形式
  const [treeData, setTreeData] = useState(
    Util.treeToArray(
      data,
      {
        parentIdAttr: 'pid',
        rootParentId: -1,
      },
      'value',
    ),
  );
  // 复杂格式
  // const [treeData, setTreeData] = useState(data.filter((_book) => _book.title.indexOf('1') !== -1));

  const [value, setValue] = useState('0-0-1');

  return (
    <div>
      {/* 第一种情况单选，只保留到所选择的节点 */}
      {/* 第二种情况单选，保留当前叉的所有节点 */}
      <h2>单选</h2>
      {/* <TreeAutoComplete
        value={value}
        style={{ width: 600 }}
        treeData={treeData}
        onLoadData={(_kw) => {
          return new Promise((resolve) => {
            if (!_kw) {
              resolve();
              setTreeData();
              return;
            }

            setTimeout(() => {
              const result = data.filter((_book) => _book.title.indexOf(_kw) !== -1);

              // 树形格式
              // setTreeData(result);
              // 简单格式
              setTreeData(
                Util.treeToArray(
                  result,
                  {
                    parentIdAttr: 'pid',
                    rootParentId: -1,
                  },
                  'value',
                ),
              );
              resolve();
            }, 500);
          });
        }}
        onChange={(_value) => {
          setValue(_value);
        }}
        defaultValue={['0-0-0', '0-0-1']}
        treeDataSimpleMode={{
          id: 'value',
          pId: 'pid',
          rootPId: -1,
        }}
      /> */}

      <p style={{ height: 40 }} />
      {/* 第三种情况多选，只保留到所选择的节点 */}
      {/* 第四种情况多选，保留当前叉的所有节点 */}
      <h2>多选</h2>
      {/* <TreeAutoComplete
        multiple
        value={value}
        style={{ width: 600 }}
        treeData={treeData}
        onLoadData={(_kw) => {
          return new Promise((resolve) => {
            if (!_kw) {
              resolve();
              setTreeData();
              return;
            }

            setTimeout(() => {
              const result = data.filter((_book) => _book.title.indexOf(_kw) !== -1);

              // setTreeData(result);
              // 简单格式
              setTreeData(
                Util.treeToArray(
                  result,
                  {
                    parentIdAttr: 'pid',
                    rootParentId: -1,
                  },
                  'value',
                ),
              );
              resolve();
            }, 500);
          });
        }}
        onChange={(_value) => {
          setValue(_value);
        }}
        defaultValue={['0-0-0', '0-0-1']}
        treeDataSimpleMode={{
          id: 'value',
          pId: 'pid',
          rootPId: -1,
        }}
      /> */}

      <p style={{ height: 40 }} />
      {/* 第五种情况checkbox，ShowChild */}
      {/* 第六种情况checkbox，ShowParent */}
      {/* 第七种情况checkbox，showAll */}
      <h2>带checkbox</h2>
      <TreeAutoComplete
        value={value}
        style={{ width: 600 }}
        treeData={treeData}
        multiple
        onLoadData={(_kw) => {
          return new Promise((resolve) => {
            if (!_kw) {
              resolve();
              setTreeData();
              return;
            }

            setTimeout(() => {
              const result = data.filter((_book) => _book.title.indexOf(_kw) !== -1);

              // setTreeData(result);
              // 简单格式
              setTreeData(
                Util.treeToArray(
                  result,
                  {
                    parentIdAttr: 'pid',
                    rootParentId: -1,
                  },
                  'value',
                ),
              );
              resolve();
            }, 500);
          });
        }}
        onChange={(_value) => {
          setValue(_value);
        }}
        treeDataSimpleMode={{
          id: 'value',
          pId: 'pid',
          rootPId: -1,
        }}
        treeCheckable
        showCheckedStrategy={TreeSelect.SHOW_ALL}
      />
    </div>
  );
};
