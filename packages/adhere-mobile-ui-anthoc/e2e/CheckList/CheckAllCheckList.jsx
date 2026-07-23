import React, { useState } from 'react';

import { CheckList } from '../../src/index';
import { letterOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <CheckList.CheckAllCheckList
      value={value}
      options={letterOptions}
      onChange={setValue}
      onCheckAllChange={setValue}
      checkAllLabel={(_value) => (
        <div>
          <span>{!!_value.length ? `(${_value.length})` : null}</span>
          <span>全选</span>
        </div>
      )}
    />
  );
};
