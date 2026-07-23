import React, { useState } from 'react';

import { Checkbox } from '../../src/index';
import { letterOptions } from './options';

import '../../src/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.CheckAllCheckbox
      spaceStyle={{ '--gap': '24px' }}
      checkAllBodyWrapperStyle={{ padding: 15, paddingTop: 0 }}
      value={value}
      onChange={setValue}
      onCheckAllChange={setValue}
      options={letterOptions}
      checkAllLabel={(_value) => (
        <div>
          <span>{!!_value.length ? `(${_value.length})` : null}</span>
          <span>全选</span>
        </div>
      )}
    />
  );
};
