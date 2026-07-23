import React, { useState } from 'react';

import Util from '@baifendian/adhere-util';

import AutoComplete from '../src/index';
import { TREE_DATA } from './treeData';

import '../src/index.less';

const FLAT_TREE_DATA = Util.treeToArray(
  TREE_DATA,
  {
    parentIdAttr: 'pId',
    rootParentId: 0,
  },
  'id',
);

export default () => {
  const [treeData, setTreeData] = useState([]);
  const [value, setValue] = useState([]);

  return (
    <AutoComplete.TreeAutoComplete
      placeholder="请输入关键字"
      value={value}
      style={{ width: 300 }}
      treeCheckable
      multiple
      treeDataSimpleMode
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
            const result = FLAT_TREE_DATA.filter((_node) => _node.title.indexOf(_kw) !== -1);

            setTreeData(
              Util.treeToArray(
                Util.completionIncompleteFlatArr(FLAT_TREE_DATA, result, {
                  keyAttr: 'id',
                  titleAttr: 'title',
                  parentIdAttr: 'pId',
                  rootParentId: 0,
                }),
                {
                  keyAttr: 'id',
                  titleAttr: 'title',
                  parentIdAttr: 'pId',
                  rootParentId: 0,
                },
              ),
            );

            resolve();
          }, 100);
        });
      }}
    />
  );
};
