import React, { useState } from 'react';

import { TreeSelect } from '../../src';
import {
  AUTOCOMPLETE_FLAT_TREE_DATA,
  AUTOCOMPLETE_TREE_DATA,
  filterFlatTreeByKeyword,
} from './treeData';

import '../../src/index.less';

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);
  const [value, setValue] = useState([AUTOCOMPLETE_TREE_DATA[0].children[0].children[0].key]);

  return (
    <TreeSelect.AutoCompleteTreeLeafSelect
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      valueProp="key"
      value={value}
      onChange={setValue}
      treeSelectProps={{
        treeData: AUTOCOMPLETE_TREE_DATA,
      }}
      defaultDataSource={[AUTOCOMPLETE_TREE_DATA[0].children[0].children[0]]}
      searchDataSource={searchDataSource}
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            setSearchDataSource([]);
            resolve();
            return;
          }

          setTimeout(() => {
            setSearchDataSource(filterFlatTreeByKeyword(AUTOCOMPLETE_FLAT_TREE_DATA, _kw));
            resolve();
          }, 100);
        });
      }}
      renderResultItem={(record) => <div>{record.title}</div>}
    />
  );
};
