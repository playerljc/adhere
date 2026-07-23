import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import Space from '../../src/space';

const options = Array.from({ length: 8 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    label: letter,
    value: letter,
  };
});

export default () => {
  const [value, setValue] = useState(['A']);
  const [childrenValue, setChildrenValue] = useState(['B']);

  return (
    <Space orientation="vertical" size={24}>
      <div>
        <div style={{ marginBottom: 8 }}>options + direction / spaceProps</div>
        <Checkbox.CheckboxGroupExt
          value={value}
          onChange={(checkedValue) => setValue(checkedValue)}
          direction="vertical"
          spaceProps={{ size: 8 }}
          options={options}
        />
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>children 自定义渲染 + 完整 onChange 参数</div>
        <Checkbox.CheckboxGroupExt
          value={childrenValue}
          onChange={(checkedValue, checked, changeValue) => {
            console.log({ checkedValue, checked, changeValue });
            setChildrenValue(checkedValue);
          }}
          options={options}
        >
          {(onItemChange) => (
            <Space wrap size={12}>
              {options.map((item) => (
                <Checkbox
                  key={item.value}
                  checked={(childrenValue ?? []).includes(item.value)}
                  onChange={(e) => onItemChange(e, item.value)}
                >
                  {item.label}
                </Checkbox>
              ))}
            </Space>
          )}
        </Checkbox.CheckboxGroupExt>
      </div>
    </Space>
  );
};
